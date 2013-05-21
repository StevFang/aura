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
(function() {
    window.WallTime || (window.WallTime = {});
    window.WallTime.data = {
        rules: {"Para":[{"name":"Para","_from":"1975","_to":"1988","type":"-","in":"Oct","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1975","_to":"1978","type":"-","in":"Mar","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1979","_to":"1991","type":"-","in":"Apr","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1989","_to":"only","type":"-","in":"Oct","on":"22","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1990","_to":"only","type":"-","in":"Oct","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1991","_to":"only","type":"-","in":"Oct","on":"6","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1992","_to":"only","type":"-","in":"Mar","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1992","_to":"only","type":"-","in":"Oct","on":"5","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1993","_to":"only","type":"-","in":"Mar","on":"31","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1993","_to":"1995","type":"-","in":"Oct","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1994","_to":"1995","type":"-","in":"Feb","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1996","_to":"only","type":"-","in":"Mar","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1996","_to":"2001","type":"-","in":"Oct","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"1997","_to":"only","type":"-","in":"Feb","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"1998","_to":"2001","type":"-","in":"Mar","on":"Sun>=1","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"2002","_to":"2004","type":"-","in":"Apr","on":"Sun>=1","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"2002","_to":"2003","type":"-","in":"Sep","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"2004","_to":"2009","type":"-","in":"Oct","on":"Sun>=15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"2005","_to":"2009","type":"-","in":"Mar","on":"Sun>=8","at":"0:00","_save":"0","letter":"-"},{"name":"Para","_from":"2010","_to":"max","type":"-","in":"Oct","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Para","_from":"2010","_to":"max","type":"-","in":"Apr","on":"Sun>=8","at":"0:00","_save":"0","letter":"-"}]},
        zones: {"America/Asuncion":[{"name":"America/Asuncion","_offset":"-3:50:40","_rule":"-","format":"LMT","_until":"1890"},{"name":"America/Asuncion","_offset":"-3:50:40","_rule":"-","format":"AMT","_until":"1931 Oct 10"},{"name":"America/Asuncion","_offset":"-4:00","_rule":"-","format":"PYT","_until":"1972 Oct"},{"name":"America/Asuncion","_offset":"-3:00","_rule":"-","format":"PYT","_until":"1974 Apr"},{"name":"America/Asuncion","_offset":"-4:00","_rule":"Para","format":"PY%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);