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
        rules: {"C-Eur":[{"name":"C-Eur","_from":"1916","_to":"only","type":"-","in":"Apr","on":"30","at":"23:00","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1916","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1917","_to":"1918","type":"-","in":"Apr","on":"Mon>=15","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1917","_to":"1918","type":"-","in":"Sep","on":"Mon>=15","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1940","_to":"only","type":"-","in":"Apr","on":"1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1942","_to":"only","type":"-","in":"Nov","on":"2","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1943","_to":"only","type":"-","in":"Mar","on":"29","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1943","_to":"only","type":"-","in":"Oct","on":"4","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1944","_to":"1945","type":"-","in":"Apr","on":"Mon>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1944","_to":"only","type":"-","in":"Oct","on":"2","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1945","_to":"only","type":"-","in":"Sep","on":"16","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"C-Eur","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"C-Eur","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"2:00s","_save":"0","letter":"-"}],"Russia":[{"name":"Russia","_from":"1917","_to":"only","type":"-","in":"Jul","on":"1","at":"23:00","_save":"1:00","letter":"MST"},{"name":"Russia","_from":"1917","_to":"only","type":"-","in":"Dec","on":"28","at":"0:00","_save":"0","letter":"MMT"},{"name":"Russia","_from":"1918","_to":"only","type":"-","in":"May","on":"31","at":"22:00","_save":"2:00","letter":"MDST"},{"name":"Russia","_from":"1918","_to":"only","type":"-","in":"Sep","on":"16","at":"1:00","_save":"1:00","letter":"MST"},{"name":"Russia","_from":"1919","_to":"only","type":"-","in":"May","on":"31","at":"23:00","_save":"2:00","letter":"MDST"},{"name":"Russia","_from":"1919","_to":"only","type":"-","in":"Jul","on":"1","at":"2:00","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1919","_to":"only","type":"-","in":"Aug","on":"16","at":"0:00","_save":"0","letter":"-"},{"name":"Russia","_from":"1921","_to":"only","type":"-","in":"Feb","on":"14","at":"23:00","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1921","_to":"only","type":"-","in":"Mar","on":"20","at":"23:00","_save":"2:00","letter":"M"},{"name":"Russia","_from":"1921","_to":"only","type":"-","in":"Sep","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1921","_to":"only","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Russia","_from":"1981","_to":"1984","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1981","_to":"1983","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Russia","_from":"1984","_to":"1991","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"Russia","_from":"1985","_to":"1991","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1992","_to":"only","type":"-","in":"Mar","on":"lastSat","at":"23:00","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1992","_to":"only","type":"-","in":"Sep","on":"lastSat","at":"23:00","_save":"0","letter":"-"},{"name":"Russia","_from":"1993","_to":"2010","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"Russia","_from":"1993","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"Russia","_from":"1996","_to":"2010","type":"-","in":"Oct","on":"lastSun","at":"2:00s","_save":"0","letter":"-"}],"E-Eur":[{"name":"E-Eur","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"E-Eur","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"E-Eur","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"E-Eur","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"0:00","_save":"0","letter":"-"},{"name":"E-Eur","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"0:00","_save":"1:00","letter":"S"},{"name":"E-Eur","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"0:00","_save":"0","letter":"-"}],"EU":[{"name":"EU","_from":"1977","_to":"1980","type":"-","in":"Apr","on":"Sun>=1","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1977","_to":"only","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1978","_to":"only","type":"-","in":"Oct","on":"1","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EU","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EU","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}]},
        zones: {"Europe/Kiev":[{"name":"Europe/Kiev","_offset":"2:02:04","_rule":"-","format":"LMT","_until":"1880"},{"name":"Europe/Kiev","_offset":"2:02:04","_rule":"-","format":"KMT","_until":"1924 May 2"},{"name":"Europe/Kiev","_offset":"2:00","_rule":"-","format":"EET","_until":"1930 Jun 21"},{"name":"Europe/Kiev","_offset":"3:00","_rule":"-","format":"MSK","_until":"1941 Sep 20"},{"name":"Europe/Kiev","_offset":"1:00","_rule":"C-Eur","format":"CE%sT","_until":"1943 Nov 6"},{"name":"Europe/Kiev","_offset":"3:00","_rule":"Russia","format":"MSK/MSD","_until":"1990"},{"name":"Europe/Kiev","_offset":"3:00","_rule":"-","format":"MSK","_until":"1990 Jul 1 2:00"},{"name":"Europe/Kiev","_offset":"2:00","_rule":"-","format":"EET","_until":"1992"},{"name":"Europe/Kiev","_offset":"2:00","_rule":"E-Eur","format":"EE%sT","_until":"1995"},{"name":"Europe/Kiev","_offset":"2:00","_rule":"EU","format":"EE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);