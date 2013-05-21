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
        rules: {"Finland":[{"name":"Finland","_from":"1942","_to":"only","type":"-","in":"Apr","on":"3","at":"0:00","_save":"1:00","letter":"S"},{"name":"Finland","_from":"1942","_to":"only","type":"-","in":"Oct","on":"3","at":"0:00","_save":"0","letter":"-"},{"name":"Finland","_from":"1981","_to":"1982","type":"-","in":"Mar","on":"lastSun","at":"2:00","_save":"1:00","letter":"S"},{"name":"Finland","_from":"1981","_to":"1982","type":"-","in":"Sep","on":"lastSun","at":"3:00","_save":"0","letter":"-"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Helsinki":[{"name":"Europe/Helsinki","_offset":"1:39:52","_rule":"-","format":"LMT","_until":"1878 May 31"},{"name":"Europe/Helsinki","_offset":"1:39:52","_rule":"-","format":"HMT","_until":"1921 May"},{"name":"Europe/Helsinki","_offset":"2:00","_rule":"Finland","format":"EE%sT","_until":"1983"},{"name":"Europe/Helsinki","_offset":"2:00","_rule":"EU","format":"EE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);