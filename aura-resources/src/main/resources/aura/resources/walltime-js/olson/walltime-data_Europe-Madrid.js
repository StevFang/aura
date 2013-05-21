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
        rules: {"Spain":[{"name":"Spain","_from":"1917","_to":"only","type":"-","in":"May","on":"5","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1917","_to":"1919","type":"-","in":"Oct","on":"6","at":"23:00s","_save":"0","letter":"-"},{"name":"Spain","_from":"1918","_to":"only","type":"-","in":"Apr","on":"15","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1919","_to":"only","type":"-","in":"Apr","on":"5","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1924","_to":"only","type":"-","in":"Apr","on":"16","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1924","_to":"only","type":"-","in":"Oct","on":"4","at":"23:00s","_save":"0","letter":"-"},{"name":"Spain","_from":"1926","_to":"only","type":"-","in":"Apr","on":"17","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1926","_to":"1929","type":"-","in":"Oct","on":"Sat>=1","at":"23:00s","_save":"0","letter":"-"},{"name":"Spain","_from":"1927","_to":"only","type":"-","in":"Apr","on":"9","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1928","_to":"only","type":"-","in":"Apr","on":"14","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1929","_to":"only","type":"-","in":"Apr","on":"20","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1937","_to":"only","type":"-","in":"May","on":"22","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1937","_to":"1939","type":"-","in":"Oct","on":"Sat>=1","at":"23:00s","_save":"0","letter":"-"},{"name":"Spain","_from":"1938","_to":"only","type":"-","in":"Mar","on":"22","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1939","_to":"only","type":"-","in":"Apr","on":"15","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1940","_to":"only","type":"-","in":"Mar","on":"16","at":"23:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1942","_to":"only","type":"-","in":"May","on":"2","at":"22:00s","_save":"2:00","letter":"M"},{"name":"Spain","_from":"1942","_to":"only","type":"-","in":"Sep","on":"1","at":"22:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1943","_to":"1946","type":"-","in":"Apr","on":"Sat>=13","at":"22:00s","_save":"2:00","letter":"M"},{"name":"Spain","_from":"1943","_to":"only","type":"-","in":"Oct","on":"3","at":"22:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1944","_to":"only","type":"-","in":"Oct","on":"10","at":"22:00s","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1945","_to":"only","type":"-","in":"Sep","on":"30","at":"1:00","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1946","_to":"only","type":"-","in":"Sep","on":"30","at":"0:00","_save":"0","letter":"-"},{"name":"Spain","_from":"1949","_to":"only","type":"-","in":"Apr","on":"30","at":"23:00","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1949","_to":"only","type":"-","in":"Sep","on":"30","at":"1:00","_save":"0","letter":"-"},{"name":"Spain","_from":"1974","_to":"1975","type":"-","in":"Apr","on":"Sat>=13","at":"23:00","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1974","_to":"1975","type":"-","in":"Oct","on":"Sun>=1","at":"1:00","_save":"0","letter":"-"},{"name":"Spain","_from":"1976","_to":"only","type":"-","in":"Mar","on":"27","at":"23:00","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1976","_to":"1977","type":"-","in":"Sep","on":"lastSun","at":"1:00","_save":"0","letter":"-"},{"name":"Spain","_from":"1977","_to":"1978","type":"-","in":"Apr","on":"2","at":"23:00","_save":"1:00","letter":"S"},{"name":"Spain","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00","_save":"0","letter":"-"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Madrid":[{"name":"Europe/Madrid","_offset":"-0:14:44","_rule":"-","format":"LMT","_until":"1901 Jan 1 0:00s"},{"name":"Europe/Madrid","_offset":"0:00","_rule":"Spain","format":"WE%sT","_until":"1946 Sep 30"},{"name":"Europe/Madrid","_offset":"1:00","_rule":"Spain","format":"CE%sT","_until":"1979"},{"name":"Europe/Madrid","_offset":"1:00","_rule":"EU","format":"CE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);