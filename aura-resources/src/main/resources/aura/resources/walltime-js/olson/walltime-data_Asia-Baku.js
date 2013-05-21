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
        rules: {"RussiaAsia":[{"name":"RussiaAsia","_from":"1981","_to":"1984","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1981","_to":"1983","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1984","_to":"1991","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1985","_to":"1991","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1992","_to":"only","type":"-","in":"Mar","on":"lastSat","at":"23:00","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1992","_to":"only","type":"-","in":"Sep","on":"lastSat","at":"23:00","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1993","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"2:00s","_save":"1:00","letter":"S"},{"name":"RussiaAsia","_from":"1993","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"2:00s","_save":"0","letter":"-"},{"name":"RussiaAsia","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"2:00s","_save":"0","letter":"-"}],"EUAsia":[{"name":"EUAsia","_from":"1981","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"1:00u","_save":"1:00","letter":"S"},{"name":"EUAsia","_from":"1979","_to":"1995","type":"-","in":"Sep","on":"lastSun","at":"1:00u","_save":"0","letter":"-"},{"name":"EUAsia","_from":"1996","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"1:00u","_save":"0","letter":"-"}],"Azer":[{"name":"Azer","_from":"1997","_to":"max","type":"-","in":"Mar","on":"lastSun","at":"4:00","_save":"1:00","letter":"S"},{"name":"Azer","_from":"1997","_to":"max","type":"-","in":"Oct","on":"lastSun","at":"5:00","_save":"0","letter":"-"}]},
        zones: {"Asia/Baku":[{"name":"Asia/Baku","_offset":"3:19:24","_rule":"-","format":"LMT","_until":"1924 May 2"},{"name":"Asia/Baku","_offset":"3:00","_rule":"-","format":"BAKT","_until":"1957 Mar"},{"name":"Asia/Baku","_offset":"4:00","_rule":"RussiaAsia","format":"BAK%sT","_until":"1991 Mar 31 2:00s"},{"name":"Asia/Baku","_offset":"3:00","_rule":"1:00","format":"BAKST","_until":"1991 Aug 30"},{"name":"Asia/Baku","_offset":"3:00","_rule":"RussiaAsia","format":"AZ%sT","_until":"1992 Sep lastSat 23:00"},{"name":"Asia/Baku","_offset":"4:00","_rule":"-","format":"AZT","_until":"1996"},{"name":"Asia/Baku","_offset":"4:00","_rule":"EUAsia","format":"AZ%sT","_until":"1997"},{"name":"Asia/Baku","_offset":"4:00","_rule":"Azer","format":"AZ%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);