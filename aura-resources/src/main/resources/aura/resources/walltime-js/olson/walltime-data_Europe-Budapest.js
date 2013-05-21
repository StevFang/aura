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
        rules: {"C-Eur":[{"name":"C-Eur","_from":"1916","_to":"only","type":"-","in":"Apr","on":"30","at":"23:00","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1916","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1917","_to":"1918","type":"-","in":"Apr","on":"Mon>=15","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1917","_to":"1918","type":"-","in":"Sep","on":"Mon>=15","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1940","_to":"only","type":"-","in":"Apr","on":"1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1942","_to":"only","type":"-","in":"Nov","on":"2","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1943","_to":"only","type":"-","in":"Mar","on":"29","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1943","_to":"only","type":"-","in":"Oct","on":"4","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1944","_to":"1945","type":"-","in":"Apr","on":"Mon>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1944","_to":"only","type":"-","in":"Oct","on":"2","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1945","_to":"only","type":"-","in":"Sep","on":"16","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"2:00s","_save":"0","letter":"-"}],"Hungary":[{"name":"Hungary","_from":"1918","_to":"only","type":"-","in":"Apr","on":"1","at":"3:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1918","_to":"only","type":"-","in":"Sep","on":"29","at":"3:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1919","_to":"only","type":"-","in":"Apr","on":"15","at":"3:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1919","_to":"only","type":"-","in":"Sep","on":"15","at":"3:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1920","_to":"only","type":"-","in":"Apr","on":"5","at":"3:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1920","_to":"only","type":"-","in":"Sep","on":"30","at":"3:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1945","_to":"only","type":"-","in":"May","on":"1","at":"23:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1945","_to":"only","type":"-","in":"Nov","on":"3","at":"0:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1946","_to":"only","type":"-","in":"Mar","on":"31","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1946","_to":"1949","type":"-","in":"Oct","on":"Sun>=1","at":"2:00s","_save":"0","letter":"-"},{"name":"Hungary","_from":"1947","_to":"1949","type":"-","in":"Apr","on":"Sun>=4","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1950","_to":"only","type":"-","in":"Apr","on":"17","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1950","_to":"only","type":"-","in":"Oct","on":"23","at":"2:00s","_save":"0","letter":"-"},{"name":"Hungary","_from":"1954","_to":"1955","type":"-","in":"May","on":"23","at":"0:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1954","_to":"1955","type":"-","in":"Oct","on":"3","at":"0:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1956","_to":"only","type":"-","in":"Jun","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1956","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1957","_to":"only","type":"-","in":"Jun","on":"Sun>=1","at":"1:00","_save":"1:00","letter":"S"},{"name":"Hungary","_from":"1957","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"3:00","_save":"0","letter":"-"},{"name":"Hungary","_from":"1980","_to":"only","type":"-","in":"Apr","on":"6","at":"1:00","_save":"1:00","letter":"S"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Budapest":[{"name":"Europe/Budapest","_offset":"1:16:20","_rule":"-","format":"LMT","_until":"1890 Oct"},{"name":"Europe/Budapest","_offset":"1:00","_rule":"C-Eur","format":"CE%sT","_until":"1918"},{"name":"Europe/Budapest","_offset":"1:00","_rule":"Hungary","format":"CE%sT","_until":"1941 Apr 6 2:00"},{"name":"Europe/Budapest","_offset":"1:00","_rule":"C-Eur","format":"CE%sT","_until":"1945"},{"name":"Europe/Budapest","_offset":"1:00","_rule":"Hungary","format":"CE%sT","_until":"1980 Sep 28 2:00s"},{"name":"Europe/Budapest","_offset":"1:00","_rule":"EU","format":"CE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);