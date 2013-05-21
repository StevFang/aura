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
        rules: {"Arg":[{"name":"Arg","_from":"1930","_to":"only","type":"-","in":"Dec","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1931","_to":"only","type":"-","in":"Apr","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1931","_to":"only","type":"-","in":"Oct","on":"15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1932","_to":"1940","type":"-","in":"Mar","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1932","_to":"1939","type":"-","in":"Nov","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1940","_to":"only","type":"-","in":"Jul","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1941","_to":"only","type":"-","in":"Jun","on":"15","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1941","_to":"only","type":"-","in":"Oct","on":"15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1943","_to":"only","type":"-","in":"Aug","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1943","_to":"only","type":"-","in":"Oct","on":"15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1946","_to":"only","type":"-","in":"Mar","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1946","_to":"only","type":"-","in":"Oct","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1963","_to":"only","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1963","_to":"only","type":"-","in":"Dec","on":"15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1964","_to":"1966","type":"-","in":"Mar","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1964","_to":"1966","type":"-","in":"Oct","on":"15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1967","_to":"only","type":"-","in":"Apr","on":"2","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1967","_to":"1968","type":"-","in":"Oct","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1968","_to":"1969","type":"-","in":"Apr","on":"Sun>=1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1974","_to":"only","type":"-","in":"Jan","on":"23","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1974","_to":"only","type":"-","in":"May","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1988","_to":"only","type":"-","in":"Dec","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1989","_to":"1993","type":"-","in":"Mar","on":"Sun>=1","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"1989","_to":"1992","type":"-","in":"Oct","on":"Sun>=15","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"1999","_to":"only","type":"-","in":"Oct","on":"Sun>=1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"2000","_to":"only","type":"-","in":"Mar","on":"3","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"2007","_to":"only","type":"-","in":"Dec","on":"30","at":"0:00","_save":"1:00","letter":"S"},{"name":"Arg","_from":"2008","_to":"2009","type":"-","in":"Mar","on":"Sun>=15","at":"0:00","_save":"0","letter":"-"},{"name":"Arg","_from":"2008","_to":"only","type":"-","in":"Oct","on":"Sun>=15","at":"0:00","_save":"1:00","letter":"S"}]},
        zones: {"America/Argentina/Jujuy":[{"name":"America/Argentina/Jujuy","_offset":"-4:21:12","_rule":"-","format":"LMT","_until":"1894 Oct 31"},{"name":"America/Argentina/Jujuy","_offset":"-4:16:48","_rule":"-","format":"CMT","_until":"1920 May"},{"name":"America/Argentina/Jujuy","_offset":"-4:00","_rule":"-","format":"ART","_until":"1930 Dec"},{"name":"America/Argentina/Jujuy","_offset":"-4:00","_rule":"Arg","format":"AR%sT","_until":"1969 Oct 5"},{"name":"America/Argentina/Jujuy","_offset":"-3:00","_rule":"Arg","format":"AR%sT","_until":"1990 Mar 4"},{"name":"America/Argentina/Jujuy","_offset":"-4:00","_rule":"-","format":"WART","_until":"1990 Oct 28"},{"name":"America/Argentina/Jujuy","_offset":"-4:00","_rule":"1:00","format":"WARST","_until":"1991 Mar 17"},{"name":"America/Argentina/Jujuy","_offset":"-4:00","_rule":"-","format":"WART","_until":"1991 Oct 6"},{"name":"America/Argentina/Jujuy","_offset":"-3:00","_rule":"1:00","format":"ARST","_until":"1992"},{"name":"America/Argentina/Jujuy","_offset":"-3:00","_rule":"Arg","format":"AR%sT","_until":"1999 Oct 3"},{"name":"America/Argentina/Jujuy","_offset":"-4:00","_rule":"Arg","format":"AR%sT","_until":"2000 Mar 3"},{"name":"America/Argentina/Jujuy","_offset":"-3:00","_rule":"Arg","format":"AR%sT","_until":"2008 Oct 18"},{"name":"America/Argentina/Jujuy","_offset":"-3:00","_rule":"-","format":"ART","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);