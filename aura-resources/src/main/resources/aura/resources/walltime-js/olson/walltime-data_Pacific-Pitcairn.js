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
        rules: {},
        zones: {"Pacific/Pitcairn":[{"name":"Pacific/Pitcairn","_offset":"-8:40:20","_rule":"-","format":"LMT","_until":"1901"},{"name":"Pacific/Pitcairn","_offset":"-8:30","_rule":"-","format":"PNT","_until":"1998 Apr 27 00:00"},{"name":"Pacific/Pitcairn","_offset":"-8:00","_rule":"-","format":"PST","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);