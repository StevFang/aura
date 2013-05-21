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
        rules: {"Pakistan":[{"name":"Pakistan","_from":"2002","_to":"only","type":"-","in":"Apr","on":"Sun>=2","at":"0:01","_save":"1:00","letter":"S"},{"name":"Pakistan","_from":"2002","_to":"only","type":"-","in":"Oct","on":"Sun>=2","at":"0:01","_save":"0","letter":"-"},{"name":"Pakistan","_from":"2008","_to":"only","type":"-","in":"Jun","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Pakistan","_from":"2008","_to":"only","type":"-","in":"Nov","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Pakistan","_from":"2009","_to":"only","type":"-","in":"Apr","on":"15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Pakistan","_from":"2009","_to":"only","type":"-","in":"Nov","on":"1","at":"0:00","_save":"0","letter":"-"}]},
        zones: {"Asia/Karachi":[{"name":"Asia/Karachi","_offset":"4:28:12","_rule":"-","format":"LMT","_until":"1907"},{"name":"Asia/Karachi","_offset":"5:30","_rule":"-","format":"IST","_until":"1942 Sep"},{"name":"Asia/Karachi","_offset":"5:30","_rule":"1:00","format":"IST","_until":"1945 Oct 15"},{"name":"Asia/Karachi","_offset":"5:30","_rule":"-","format":"IST","_until":"1951 Sep 30"},{"name":"Asia/Karachi","_offset":"5:00","_rule":"-","format":"KART","_until":"1971 Mar 26"},{"name":"Asia/Karachi","_offset":"5:00","_rule":"Pakistan","format":"PK%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);