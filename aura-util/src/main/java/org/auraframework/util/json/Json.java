/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.auraframework.util.json;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.TimeZone;

import javax.annotation.Nonnull;

import org.auraframework.util.AuraTextUtil;
import org.auraframework.util.UncloseableOutputStream;
import org.auraframework.util.json.Json.Serialization.ReferenceType;
import org.auraframework.util.json.Json.Serialization.ReferenceScope;

import com.google.common.base.Charsets;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.common.io.CountingOutputStream;

/**
 * java -> javascript encoder.
 * 
 * May or may not follow the official JSON (JavaScript Object Notation)
 * standard. It handles serializing all the basics, numbers, strings, booleans,
 * arrays, and maps as well as some common SFDC data structures like
 * PicklistItem and anything that implements {@link JsonSerializable}. Some
 * significant consumers of the output are inline editing
 * <ol>
 * <li>Java null reference: JS null value
 * <li>Java Map: JS Object
 * <li>Java List: JS Array
 * <li>Java Object: object.toArray()
 * </ol>
 * 
 * NOTE: the code for handling the stacks is rather more complicated to maintain
 * performance. The problem is that {@link #writeMapBegin()} and
 * {@link #writeArrayBegin()} are called hundreds of thousands of times a
 * second, meaning that creating and discarding objects for each one is too
 * expensive. This means that we use a separate stack in the case that we are
 * not formatting to avoid the allocation of the object.
 * 
 * @see <a
 *      href="https://sites.google.com/a/salesforce.com/user-interface/documentation/json">SFDC
 *      json documentation</a>
 * @since 144
 */
public class Json {
    @SuppressWarnings("serial")
    public static class JsonException extends RuntimeException {
        public JsonException(String message) {
            super(message);
        }
    }

    public static final String MIME_TYPE = "application/json";

    /*
    * JBUCH: HALO: TODO:
    *
    * ApplicationKey Enum to provide key based minification while serializing json
    * Ideally, we will replace all uses of pure strings on the Server and Client; and be able to use
    * the shortName in non-dev scenarios (resulting in 10-40% app.js size reduction).
    *
    * *sigh* I had it mostly working, but had to abandon branch due to large code change conflicts
    * with other team members. Because of that, I can only afford to change these four right now,
    * since they are used directly in this file for the structure of the frame, or net new:
    * ACCESS (access), SERIAL_ID (serId), SERIAL_REFID (serRefId), VALUE (value)
    *
    * While these three don't buy us much, my current hope is only to offset the additional cost
    * of access="G|P" values in the definitions.
    *
    * */
    public enum ApplicationKey {
        ABSTRACT("isAbstract","ab"),
        ACCESS("xs" /*"access"*/,"xs"),
        ACTION("action","x"),
        ACTIONS("action","xx"),
        ACTIONDEFS("actionDefs","ac"),
        ACTIONTYPE("actionType","at"),
        ATTRIBUTES("attributes","a"),
        ATTRIBUTEDEFS("attributeDefs","ad"),
        COMPONENTDEF("componentDef","c"),
        CONTROLLERDEF("controllerDef","cd"),
        CREATIONPATH("creationPath","cp"),
        CSSPRELOADED("isCSSPreloaded","css"),
        DEFAULT("default","d"),
        DEFTYPE("defType","dt"),
        DESCRIPTOR("descriptor","de"),
        EVENTDEF("eventDef","ed"),
        EVENTS("events","e"),
        FACETS("facets","fa"),
        FUNCTIONS("functions","f"),
        HANDLERS("handlers","eh"),
        HASSERVERDEPENDENCIES("hasServerDeps","hs"),
        HELPERDEF("helperDef","h"),
        INCLUDES("includes","ic"),
        INTERFACES("interfaces","i"),
        LOCALID("localId","lid"),
        MEMBERS("members","mm"),
        MODEL("model","m"),
        MODELDEF("modelDef","md"),
        METHODS("methods","me"),
        NAME("name","n"),
        ORIGINAL("original","o"),
        PARAMS("params","pa"),
        PROVIDE("provide","p"),
        PROVIDERDEF("providerDef","pd"),
        REGISTEREVENTDEFS("registerEventDefs","re"),
        RENDERERDEF("rendererDef","rd"),
        REQUIRED("required","rq"),
        REQUIREDVERSIONDEFS("requiredVersionDefs","rv"),
        RETURNTYPE("returnType","rt"),
        SERIAL_ID("s"/*"serId"*/,"sid"),
        SERIAL_REFID("r"/*"serRefId"*/,"rid"),
        STYLEDEF("styleDef","st"),
        SUBDEFS("subDefs","sb"),
        SUPERDEF("superDef","su"),
        TYPE("type","t"),
        VALUE("v"/*"value"*/,"v"),
        VALUES("values","vv"),
        VALUEPROVIDER("valueProvider","vp");

        private String name;
        private String shortName;

        private ApplicationKey(String name, String shortName){
            this.name=name;
            this.shortName=shortName;
        }

        @Override
        public String toString(){
            return useShortName?this.shortName:this.name;
        }

        private static Boolean useShortName=false;
        public static void useShortKey(Boolean useShortKey){
            useShortName=useShortKey;
        }
    }

    public enum IndentType {
        BRACE(true, "  "), SQUARE(true, "  "), PARAM(true, ""), COMMENT(false, " * ");

        private boolean separated;
        private String indent;

        private IndentType(boolean separated, String indent) {
            this.separated = separated;
            this.indent = indent;
        }

        /**
         * Determines if this instance is separated.
         * 
         * @return The separated.
         */
        public boolean isSeparated() {
            return this.separated;
        }

        /**
         * Gets the indent for this instance.
         * 
         * @return The indent.
         */
        public String getIndent() {
            return this.indent;
        }
    }

    /**
     * A class to track indents when formatting json.
     */
    private static class IndentEntry {
        public IndentEntry(IndentType type, String indent) {
            this.type = type;
            this.first = true;
            this.indent = indent + type.getIndent();
        }

        private final IndentType type;
        private boolean first;
        private final String indent;

        public boolean needSeparator() {
            if (!this.type.isSeparated()) {
                throw new JsonException("Cannot use separator on " + this.type);
            }
            if (this.first) {
                this.first = false;
                return false;
            }
            return true;
        }

        public String getIndent() {
            return this.indent;
        }

        public IndentType getType() {
            return this.type;
        }
    }

    private final JsonSerializationContext serializationContext;
    private final Map<Object, Integer> actionMap;
    private final Map<Object, Integer> requestMap;
    private int lastRefId = 0;
    private final Appendable out;
    private final ArrayDeque<IndentEntry> indentStack = new ArrayDeque<>();
    private final DataOutputStream binaryOutput;
    private CountingOutputStream currentBinaryStream;
    private long currentBinaryStreamLength;

    /**
     * Create a Json Serialization context object that maintains information
     * about one run. This Object is NOT thread-safe. It should only be used by
     * one thread at a time, and should not be reused.
     * 
     * @param out The Appendable to write the serialized objects to.
     * @param format defaults to false. If true, the output will be multi-line
     *            and indented.
     * @param refSupport If true, any objects annotated with &#64;Serialization
     *            will be serialized using serRefIds
     */
    public Json(Appendable out, boolean format, boolean refSupport) {
        this(out, null, new DefaultJsonSerializationContext(format, refSupport, false));
    }

    protected Json(Appendable out, OutputStream binaryOutput, JsonSerializationContext context) {
        this.out = out;
        this.serializationContext = context;

        // No need to create the maps if we're not doing the ref stuff
        if (this.serializationContext.refSupport()) {
            actionMap = new IdentityHashMap<>();
            requestMap = new IdentityHashMap<>();
        } else {
            actionMap = null;
            requestMap = null;
        }

        // Set binaryOutput to a DataOutputStream if applicable; otherwise, null
        this.binaryOutput = binaryOutput == null ? null
                : (binaryOutput instanceof DataOutputStream ? (DataOutputStream) binaryOutput : new DataOutputStream(
                        binaryOutput));
    }

    // This annotations is only looked for on classes that implement
    // JsonSerializable
    @Retention(RetentionPolicy.RUNTIME)
    @Target(ElementType.TYPE)
    @Inherited
    public @interface Serialization {

        public enum ReferenceType {
            /**
             * This is the default. Just do normal json serialization
             */
            NONE,

            /**
             * If a == b, just output serRefId=<the refId of the object> after
             * the first time it's output
             */
            IDENTITY
        }

        ReferenceType referenceType() default ReferenceType.NONE;

        public enum ReferenceScope {
            /**
             * the reference is available for the entire request.
             */
            REQUEST,

            /**
             * The reference is only internal tothe current action.
             */
            ACTION
        }

        ReferenceScope referenceScope() default ReferenceScope.ACTION;
    }

    /**
     * Following are a bunch of static serialize methods. They mainly exist in
     * order to size a StringBuilder for you to some reasonable size.
     */
    public static String serialize(Object obj) {
        StringBuilder sb = new StringBuilder(16);
        serialize(obj, sb);
        return sb.toString();
    }

    /**
     * @param obj The thing to serialize
     * @param out The destination for the serialized form
     * @param format true if output should be indented and multiline for human readability (default = false)
     * @param refSupport true if @Serialization annotations should be honored (default = false)
     * @throws JsonSerializationException if there's an issue during serialization
     */
    public static void serialize(Object obj, Appendable out, boolean format, boolean refSupport) {
        try {
            new Json(out, format, refSupport).writeValue(obj);
        } catch (IOException e) {
            throw new JsonSerializationException(e);
        }
    }

    public static String serialize(Object obj, boolean format, boolean refSupport) {
        StringBuilder sb = new StringBuilder(16);
        serialize(obj, sb, format, refSupport);
        return sb.toString();
    }

    public static void serialize(Object obj, Appendable out) {
        try {
            new Json(out, false, false).writeValue(obj);
        } catch (IOException e) {
            throw new JsonSerializationException(e);
        }
    }

    public static void serialize(Object obj, Appendable out, JsonSerializationContext context) {
        try {
            new Json(out, null, context).writeValue(obj);
        } catch (IOException e) {
            throw new JsonSerializationException(e);
        }
    }

    public static String serialize(Object obj, JsonSerializationContext context) {
        try {
            StringBuilder sb = new StringBuilder(16);
            new Json(sb, null, context).writeValue(obj);
            return sb.toString();
        } catch (IOException e) {
            throw new JsonSerializationException(e);
        }
    }

    public static String serialize(Object[] result) {
        StringBuilder sb = new StringBuilder(result.length * 16);
        serialize(result, sb);
        return sb.toString();
    }

    public static String serialize(Collection<?> result) {
        StringBuilder sb = new StringBuilder(result.size() * 16);
        serialize(result, sb);
        return sb.toString();
    }

    public static String serialize(Map<String, ?> result) {
        StringBuilder sb = new StringBuilder(result.size() * 32);
        serialize(result, sb);
        return sb.toString();
    }

    /**
     * Creates a Json instance that is suitable for output streaming, one
     * element at a time. This can help avoid building up an entire JavaScript
     * AST all in memory before it gets serialized, which can help cut down
     * memory use.<br>
     * <br>
     * Note that you will need to call {@link #close()} when you are done to
     * ensure that all characters have been written out to the given
     * OutputStream. Otherwise, some characters might be missing at the end.
     * 
     * @param out The OutputStream to write the serialized objects to using
     *            UTF-8. This must not be null.
     * @param format Defaults to false. If true, the output will be multi-line
     *            and indented.
     * @param refSupport If true, any objects annotated with &#64;Serialization
     *            will be serialized using serRefIds
     * @param nullValues When true, null values are written out when they exist
     *            in arrays and map values. When false, array items and map
     *            entries with null values are not serialized
     * @return A new Json instance that you can use for streaming to the given
     *         OutputStream
     */
    public static Json createJsonStream(@Nonnull OutputStream out, boolean format, boolean refSupport,
            boolean nullValues) {
        return createJsonStream(out, new DefaultJsonSerializationContext(format, refSupport, nullValues));
    }

    /*
     * Creates a Json instance that is suitable for output streaming, one
     * element at a time. This can help avoid building up an entire JavaScript
     * AST all in memory before it gets serialized, which can help cut down
     * memory use.<br>
     * <br>
     * Note that you will need to call {@link #close()} when you are done to
     * ensure that all characters have been written out to the given
     * OutputStream. Otherwise, some characters might be missing at the end.
     * 
     * @param out The OutputStream to write the serialized objects to using
     *            UTF-8. This must not be null.
     * @param context The JSON serialization context to use for output
     * @return A new Json instance that you can use for streaming to the given
     *         OutputStream
     */
    public static Json createJsonStream(@Nonnull OutputStream out, JsonSerializationContext context) {
        if (out == null) {
            throw new IllegalArgumentException("out must not be null");
        }
        final Writer writer = new OutputStreamWriter(out, Charsets.UTF_8);
        return new Json(writer, out, context);
    }

    /*
     * Creates a Json instance that is suitable for output streaming, one
     * element at a time. This can help avoid building up an entire JavaScript
     * AST all in memory before it gets serialized, which can help cut down
     * memory use.<br>
     *
     * @param out The Appendable to which to write the serialized objects. This must not be null.
     * @param context The JSON serialization context to use for output
     * @return A new Json instance that you can use for streaming to the given appendable
     */
    public static Json createJsonStream(@Nonnull Appendable out, JsonSerializationContext context) {
        return new Json(out, null, context);
    }

    /**
     * This method is essentially here to provide type-checking for the
     * outermost map.
     * 
     * @param jsonMap
     * @param out
     * @throws JsonSerializationException if there's an issue during
     *             serialization
     */
    public static void serialize(Map<String, ?> jsonMap, Appendable out) {
        serialize((Object) jsonMap, out);
    }

    /**
     * If refSupport is on, track the object for later equality/identity checks
     * 
     * @param rs the reference scope for the object.
     * @param value the value for which we are storing a reference.
     * @return
     */
    private Integer addReference(ReferenceScope rs, Object value) {
        int ret = ++lastRefId;
        Map<Object, Integer> m = (rs == ReferenceScope.ACTION) ? actionMap : requestMap;
        m.put(value, ret);
        return ret;
    }

    /**
     * If refSupport is on, clear a set of objects from the references.
     * 
     */
    public void clearReferences() {
        if (!serializationContext.refSupport()) {
            return;
        }
        actionMap.clear();
    }

    /**
     * @param rs the scope for the reference
     * @param value the value for which we want a reference.
     * @return The refId previously assigned to the value, or null if none has been assigned yet.
     */
    protected Integer getRefId(ReferenceScope rs, Object value) {
        switch (rs) {
        case ACTION:
            return actionMap.get(value);
        case REQUEST:
            return requestMap.get(value);
        }
        return null;
    }

    /**
     * Push an indent, with a type.
     * 
     * See the notes on performance on the class above.
     * 
     * This either creates a new IndentEntry and pushes a value on the boolean
     * stack, or it just uses the boolean stack (in the case of not pretty
     * printing).
     * 
     * @param type the type of indent to push.
     */
    public void pushIndent(IndentType type) {
        if (this.indentStack.isEmpty()) {
            this.indentStack.push(new IndentEntry(type, ""));
        } else {
            this.indentStack.push(new IndentEntry(type, this.indentStack.peek().getIndent()));
        }
    }

    /**
     * Check the indent type.
     * 
     * See the notes on performance on the class above.
     * 
     * @param type the type of indent that should be on the stack.
     * @param message the message for the throwable if it is wrong.
     */
    public void checkIndent(IndentType type, String message) {
        if (this.indentStack.isEmpty() || !type.equals(this.indentStack.peek().getType())) {
            throw new JsonException(message);
        }
    }

    /**
     * Pop an indent off the stack.
     * 
     * This both checks the type on the stack, and pulls it off. See the notes
     * on performance on the class above.
     */
    public void popIndent(IndentType type, String message) {
        if (this.indentStack.isEmpty()) {
            throw new JsonException("Empty indent stack: " + message);
        }
        if (!type.equals(this.indentStack.pop().getType())) {
            throw new JsonException("Mismatched indent stack: " + message);
        }
    }

    /**
     * get the current indent.
     * 
     * See the notes on performance on the class above.
     */
    public String getIndent() {
        if (this.indentStack.isEmpty()) {
            return "";
        } else {
            return this.indentStack.peek().getIndent();
        }
    }

    /**
     * If formatting is enabled, indent, otherwise, no-op.
     * 
     * @throws IOException
     */
    public void writeIndent() throws IOException {
        if (isFormatting()) {
            out.append(getIndent());
        }
    }

    /**
     * Write the beginning of a map. Make sure to call writeMapEnd later on.
     * 
     * @throws IOException
     */
    public void writeMapBegin() throws IOException {
        out.append('{');
        writeBreak();
        pushIndent(IndentType.BRACE);
    }

    /**
     * Write the end of a map.
     * 
     * @throws IOException
     */
    public void writeMapEnd() throws IOException {
        writeBreak();
        popIndent(IndentType.BRACE, "Json.writeMapBegin must be called before calling Json.writeMapEnd");
        writeIndent();
        out.append('}');
    }

    /**
     * Start a comment.
     * 
     * This is probably not needed, but if we do want to write a multiline
     * comment in parts, you would call this function followed by multiple calls
     * to {@link #writeCommentBody(String)} followed by a call to
     * {@link #writeCommentEnd()}
     */
    public void writeCommentBegin() throws IOException {
        if (isFormatting()) {
            writeBreak();
            writeIndent();
            out.append("/*");
        }
        pushIndent(IndentType.COMMENT);
    }

    /**
     * Write out a comment end.
     */
    public void writeCommentEnd() throws IOException {
        popIndent(IndentType.COMMENT, "Json.writeCommentEnd must be preceded by Json.writeCommentBegin");
        if (isFormatting()) {
            writeBreak();
            writeIndent();
            out.append(" */");
        }
    }

    /**
     * Write out a part of a comment body.
     * 
     * This call must be preceded by {@link #writeCommentBegin()}.
     * 
     * @param body the comment to write.
     */
    public void writeCommentBody(String body) throws IOException {
        checkIndent(IndentType.COMMENT, "Json.writeCommentBody must be preceded by Json.writeCommentBegin");
        if (isFormatting()) {
            writeBreak();
            writeIndent();
            out.append(body.replace("*/", ""));
        }
    }

    /**
     * Write out a comment.
     * 
     * Note that these are not legal structures in JSON, perhaps we should have
     * a flag to turn off the writing of these for 'valid' JSON. Unfortunately,
     * we'd also have to rework our error handling.
     * 
     * This could take the body and re-work newlines with the indent, but that
     * seems a good bit of work for little gain (i.e. the result would be
     * prettier, but who cares).
     * 
     * @param body the body of the comment.
     */
    public void writeComment(String body) throws IOException {
        writeCommentBegin();
        writeCommentBody(body);
        writeCommentEnd();
    }

    /**
     * Write the beginning of an array. Make sure to call writeArrayEnd later
     * on.
     * 
     * @throws IOException
     */
    public void writeArrayBegin() throws IOException {
        out.append('[');
        writeBreak();
        pushIndent(IndentType.SQUARE);
    }

    /**
     * Write the end of an array.
     * 
     * @throws IOException
     */
    public void writeArrayEnd() throws IOException {
        writeBreak();
        popIndent(IndentType.SQUARE, "Json.writeArrayBegin must be called before calling Json.writeArrayEnd");
        writeIndent();
        out.append(']');
    }

    /**
     * If any entries have already been written to the current map/array (as
     * marked by the write*Begin methods), write a comma. If no elements have
     * yet been written, no-op.
     * 
     * @throws IOException
     */
    public void writeComma() throws IOException {
        if (!this.indentStack.isEmpty()) {
            if (this.indentStack.peek().needSeparator()) {
                out.append(",");
                writeBreak();
            }
        } else {
            // ooh, why did this happen?
            throw new JsonException("writeComma with no writeArrayBegin or writeMapBegin");
        }
    }

    public void writeMapSeparator() throws IOException {
        out.append(':');
    }

    /**
     * Encode the given value and if m != null then perform Aura-specific
     * seialization that outputs extra information in the stream so that
     * references can be established by the JSON reader
     */
    public void writeValue(Object value) throws IOException {
        JsonSerializer<Object> serializer = serializationContext.getSerializer(value);
        if (serializer == null) {
            throw new JsonSerializerNotFoundException(value);
        }
        ReferenceType rt = serializationContext.refSupport() ? serializer.getReferenceType(value) : ReferenceType.NONE;
        if (rt != ReferenceType.NONE) {
            Integer refId;
            if ((refId = getRefId(serializer.getReferenceScope(value), value)) != null) {
                // Output a simple reference
                writeMapBegin();
                writeMapEntry(ApplicationKey.SERIAL_REFID.toString(), refId);
                writeMapEnd();
            } else {
                refId = addReference(serializer.getReferenceScope(value), value);
                // Now manually output this 2-element map to avoid loop
                writeMapBegin();
                writeMapEntry(ApplicationKey.SERIAL_ID.toString(), refId);
                writeMapKey(ApplicationKey.VALUE.toString());
                serializer.serialize(this, value);
                writeMapEnd();
            }
        } else {
            serializer.serialize(this, value);
        }
    }

    /**
     * Just write the value.toString() out. Does not quote the value.
     * 
     * @param value
     * @throws IOException
     */
    public void writeLiteral(Object value) throws IOException {
        out.append(value.toString());
    }

    /**
     * Quotes value.toString() and writes it.
     * 
     * @param value
     * @throws IOException
     */
    public void writeString(Object value) throws IOException {
        out.append('"');
        out.append(AuraTextUtil.escapeForJSONString(value.toString()));
        out.append('"');
    }

    /**
     * Write the date in the ISO-8601 format that's semi-standard in json2 (in
     * that it's in the comments)
     * 
     * @param value
     * @throws IOException
     */
    public void writeDate(Date value) throws IOException {
        out.append('"');
        // Use the ISO DateTime format to write the date.
        synchronized (ISO8601FORMAT) {
            out.append(ISO8601FORMAT.format(value));
        }
        out.append('"');
    }

    private static final SimpleDateFormat ISO8601FORMAT;
    static {
        ISO8601FORMAT = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
        ISO8601FORMAT.setTimeZone(TimeZone.getTimeZone("GMT"));
    }

    /**
     * Write a map in a predictable order
     * 
     * @param map
     * @throws IOException
     */
    public void writeMap(Map<?, ?> map) throws IOException {
        writeMapBegin();
        for (Object o : map.entrySet()) {
            Map.Entry<?, ?> entry = (Map.Entry<?, ?>) o;
            Object value = entry.getValue();
            writeMapEntry(entry.getKey(), value);
        }
        writeMapEnd();
    }

    /**
     * Write an array
     * 
     * @param array
     * @throws IOException
     */
    public void writeArray(Object[] array) throws IOException {
        writeArrayBegin();
        for (Object o : array) {
            writeArrayEntry(o);
        }
        writeArrayEnd();
    }

    /**
     * Write an array
     * 
     * @param array
     * @throws IOException
     */
    public void writeArray(Collection<?> array) throws IOException {
        writeArrayBegin();
        for (Object o : array) {
            writeArrayEntry(o);
        }
        writeArrayEnd();
    }

    /**
     * Write a value into the current array, and add leading commas and
     * formatting as appropriate.
     * 
     * @param value
     * @throws IOException
     */
    public void writeArrayEntry(Object value) throws IOException {
        if (value != null || serializationContext.isNullValueEnabled()) {
            writeComma();
            writeIndent();
            writeValue(value);
        }
    }

    /**
     * Write a value into the current Map, and add leading commas and formatting
     * as appropriate.
     * 
     * @param key
     * @param value
     * @throws IOException
     */
    public void writeMapEntry(Object key, Object value) throws IOException {
        writeMapEntry(key, value, null);
    }

    /**
     * Write a value into the current Map, and add leading commas and formatting
     * as appropriate.  This version will consult its {@code type} parameter to
     * decide how to serialize null maps and arrays.
     * 
     * @param key
     * @param value
     * @param type
     * @throws IOException
     */
    public void writeMapEntry(Object key, Object value, String type) throws IOException {
        if (value == null && type != null) {
            try {
                Class<?> valueClass = Json.class.getClassLoader().loadClass(type.substring("java://".length()));
                if (Iterable.class.isAssignableFrom(valueClass)) {
                    value = new ArrayList<Boolean>(0);
                } else if (Map.class.isAssignableFrom(valueClass)) {
                    value = new HashMap<String,String>(0);
                }
            } catch (ClassNotFoundException e) {
                // Nevermind; treat "we don't know" as a non-list, non-map
            }
        }
        if (value != null || serializationContext.isNullValueEnabled()) {
            writeMapKey(key);
            writeValue(value);
        }
    }

    /**
     * Write a partial Map Entry -- everything except the value. This is useful
     * when the value requires special serialization.
     * 
     * @param key
     * @throws IOException
     * @throws JsonSerializerNotFoundException if a serializer is not found for the key
     */
    public void writeMapKey(Object key) throws IOException {
        writeComma();
        writeIndent();
        JsonSerializer<Object> serializer = serializationContext.getSerializer(key);
        if (serializer == null) {
            throw new JsonSerializerNotFoundException(key);
        }
        serializer.serialize(this, key);
        writeMapSeparator();
    }

    /**
     * If formatting is on, write out a line break.
     * 
     * @throws IOException
     */
    public void writeBreak() throws IOException {
        if (isFormatting()) {
            out.append('\n');
        }
    }

    /**
     * Start a binary stream using the given length and return an OutputStream
     * that the caller can write its binary data to.<br>
     * <br>
     * After calling this, write exactly the number of bytes specified to the
     * OutputStream returned by this method. After you do that, call
     * {@link #writeBinaryStreamEnd()}.
     * 
     * @param streamLength The number of bytes that will exist in the output before the ending backtick
     * @return The OutputStream that the caller can write its output to
     */
    public OutputStream writeBinaryStreamBegin(long streamLength) throws IOException {

        // If we are in the middle of another binary stream, then complain
        if (currentBinaryStream != null) {
            throw new IllegalStateException("Previous binary stream was not ended");
        }

        // Signal our binary stream's beginning
        validateBinaryStreamEnabledAndWriteBacktick();

        // Flush the output stream writer to push all pending characters onto the OutputStream
        if (out instanceof Writer) {
            ((Writer) out).flush();
        }

        // A JSON+binary stream begins with the length as a big endian 64-bit long
        binaryOutput.writeLong(streamLength);
        currentBinaryStreamLength = streamLength;

        // Wrap our binaryOutput in a CountingOutputStream so that we can
        // validate the length later
        return currentBinaryStream = new CountingOutputStream(new UncloseableOutputStream(binaryOutput));
    }

    private void validateBinaryStreamEnabledAndWriteBacktick() throws IOException {
        if (binaryOutput == null) {
            throw new IllegalStateException(
                    "Binary streams are supported only when Json.createJsonStream is used with an InputStream");
        }
        out.append('`');
    }

    /**
     * Ends the current binary stream and ensures that the correct number of
     * bytes were written. If a discrepancy exists, then an
     * IllegalStateException gets thrown.
     */
    public void writeBinaryStreamEnd() throws IOException {

        // Ensure that we are in a binary stream, and validate the length
        if (currentBinaryStream == null) {
            throw new IllegalStateException("Binary stream was not started");
        }
        if (currentBinaryStreamLength != currentBinaryStream.getCount()) {
            throw new IllegalStateException("Length of the binary stream was written out as "
                    + currentBinaryStreamLength + " bytes, but " + currentBinaryStream.getCount()
                    + " bytes were actually written to the OutputStream returned by writeBinaryStreamBegin()");
        }

        // Signal our binary stream's ending
        validateBinaryStreamEnabledAndWriteBacktick();
        currentBinaryStream = null;
        currentBinaryStreamLength = 0;
    }

    /**
     * Writes out any buffered characters in the OutputStreamWriter to the
     * binary OutputStream and then closes the OutputStream.<br>
     * <br>
     * Note that this method does nothing if Json was not created with an
     * OutputStream, such as via
     * {@link #createJsonStream(OutputStream, boolean, boolean, boolean)}.
     */
    public void close() throws IOException {
        if (binaryOutput != null) {
            if (out instanceof Writer) {

                // This also closes the underlying OutputStream
                ((Writer) out).close();
            } else {
                binaryOutput.close();
            }
        }
    }

    /**
     * Note: You should always try to use the write* methods instead, if at all
     * possible.
     * 
     * @return the appendable for this run in case you want to write something
     *         special to it.
     */
    public Appendable getAppendable() {
        return out;
    }

    private boolean isFormatting() {
        return serializationContext.format();
    }

    public JsonSerializationContext getSerializationContext() {
        return this.serializationContext;
    }

    /**
     * Resolve references and remove refId/serRefIds from the passed in object.
     * Useful when parsing json serialized with reference support by this class.
     * 
     * @param config Must be a Map or List that consists only of other
     *            Maps/Lists and primitives
     * @return A Map or List representing the data passed in with its references
     *         resolved
     */
    public static Object resolveRefs(Object config) {
        return resolveRefs(config, Maps.<Integer, Object> newHashMap(), null);
    }

    private static Object resolveRefs(Object config, Map<Integer, Object> cache) {
        return resolveRefs(config, cache, null);
    }

    @SuppressWarnings("unchecked")
    private static Object resolveRefs(Object config, Map<Integer, Object> cache, Object newValue) {
        if (config instanceof List) {
            List<Object> l = (List<Object>) config;
            List<Object> result;
            if (newValue != null) {
                result = (List<Object>) newValue;
            } else {
                result = Lists.newArrayListWithExpectedSize(l.size());
            }
            for (Object o : l) {
                result.add(resolveRefs(o, cache));
            }
            return result;
        } else if (config instanceof Map) {
            Map<String, Object> m = (Map<String, Object>) config;
            BigDecimal serId = (BigDecimal) m.get(ApplicationKey.SERIAL_ID.toString());
            if (serId != null) {
                Object value = m.get(ApplicationKey.VALUE.toString());
                Object result = value instanceof List ? Lists.newArrayList() : Maps.newHashMap();
                // We must cache the new item first because we could loop back
                // to this serId internally
                cache.put(serId.intValue(), result);
                return resolveRefs(value, cache, result);
            }
            BigDecimal serRefId = (BigDecimal) m.get(ApplicationKey.SERIAL_REFID.toString());
            if (serRefId != null) {
                Object value = cache.get(serRefId.intValue());
                // if there is no value we could throw here
                return value;
            }

            Map<String, Object> result;
            if (newValue != null) {
                result = (Map<String, Object>) newValue;
            } else {
                result = Maps.newHashMapWithExpectedSize(m.size());
            }
            for (Entry<String, Object> e : m.entrySet()) {
                result.put(e.getKey(), resolveRefs(e.getValue(), cache));
            }
            return result;
        }
        return config;
    }
}
