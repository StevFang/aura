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
        rules: {"Romania":[{"name":"Romania","_from":"1932","_to":"only","type":"-","in":"May","on":"21","at":"0:00s","_save":"1:00","letter":"S"},{"name":"Romania","_from":"1932","_to":"1939","type":"-","in":"Oct","on":"Sun>=1","at":"0:00s","_save":"0","letter":"-"},{"name":"Romania","_from":"1933","_to":"1939","type":"-","in":"Apr","on":"Sun>=2","at":"0:00s","_save":"1:00","letter":"S"},{"name":"Romania","_from":"1979","_to":"only","type":"-","in":"May","on":"27","at":"0:00","_save":"1:00","letter":"S"},{"name":"Romania","_from":"1979","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"Romania","_from":"1980","_to":"only","type":"-","in":"Apr","on":"5","at":"23:00","_save":"1:00","letter":"S"},{"name":"Romania","_from":"1980","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00","_save":"0","letter":"-"},{"name":"Romania","_from":"1991","_to":"1993","type":"-","in":"Mar","on":"lastSun","at":"0:00s","_save":"1:00","letter":"S"},{"name":"Romania","_from":"1991","_to":"1993","type":"-","in":"Sep","on":"lastSun","at":"0:00s","_save":"0","letter":"-"}],"C-Eur":[{"name":"C-Eur","_from":"1916","_to":"only","type":"-","in":"Apr","on":"30","at":"23:00","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1916","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1917","_to":"1918","type":"-","in":"Apr","on":"Mon>=15","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1917","_to":"1918","type":"-","in":"Sep","on":"Mon>=15","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1940","_to":"only","type":"-","in":"Apr","on":"1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1942","_to":"only","type":"-","in":"Nov","on":"2","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1943","_to":"only","type":"-","in":"Mar","on":"29","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1943","_to":"only","type":"-","in":"Oct","on":"4","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1944","_to":"1945","type":"-","in":"Apr","on":"Mon>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1944","_to":"only","type":"-","in":"Oct","on":"2","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1945","_to":"only","type":"-","in":"Sep","on":"16","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"2:00s","_save":"0","letter":"-"}],"E-Eur":[{"name":"E-Eur","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"E-Eur","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"E-Eur","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"E-Eur","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"E-Eur","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"0:00","_save":"1:00","letter":"S"},{"name":"E-Eur","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"0:00","_save":"0","letter":"-"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Bucharest":[{"name":"Europe/Bucharest","_offset":"1:44:24","_rule":"-","format":"LMT","_until":"1891 Oct"},{"name":"Europe/Bucharest","_offset":"1:44:24","_rule":"-","format":"BMT","_until":"1931 Jul 24"},{"name":"Europe/Bucharest","_offset":"2:00","_rule":"Romania","format":"EE%sT","_until":"1981 Mar 29 2:00s"},{"name":"Europe/Bucharest","_offset":"2:00","_rule":"C-Eur","format":"EE%sT","_until":"1991"},{"name":"Europe/Bucharest","_offset":"2:00","_rule":"Romania","format":"EE%sT","_until":"1994"},{"name":"Europe/Bucharest","_offset":"2:00","_rule":"E-Eur","format":"EE%sT","_until":"1997"},{"name":"Europe/Bucharest","_offset":"2:00","_rule":"EU","format":"EE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);