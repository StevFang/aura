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
        rules: {"Nic":[{"name":"Nic","_from":"1979","_to":"1980","type":"-","in":"Mar","on":"Sun>=16","at":"0:00","_save":"1:00","letter":"D"},{"name":"Nic","_from":"1979","_to":"1980","type":"-","in":"Jun","on":"Mon>=23","at":"0:00","_save":"0","letter":"S"},{"name":"Nic","_from":"2005","_to":"only","type":"-","in":"Apr","on":"10","at":"0:00","_save":"1:00","letter":"D"},{"name":"Nic","_from":"2005","_to":"only","type":"-","in":"Oct","on":"Sun>=1","at":"0:00","_save":"0","letter":"S"},{"name":"Nic","_from":"2006","_to":"only","type":"-","in":"Apr","on":"30","at":"2:00","_save":"1:00","letter":"D"},{"name":"Nic","_from":"2006","_to":"only","type":"-","in":"Oct","on":"Sun>=1","at":"1:00","_save":"0","letter":"S"}]},
        zones: {"America/Managua":[{"name":"America/Managua","_offset":"-5:45:08","_rule":"-","format":"LMT","_until":"1890"},{"name":"America/Managua","_offset":"-5:45:12","_rule":"-","format":"MMT","_until":"1934 Jun 23"},{"name":"America/Managua","_offset":"-6:00","_rule":"-","format":"CST","_until":"1973 May"},{"name":"America/Managua","_offset":"-5:00","_rule":"-","format":"EST","_until":"1975 Feb 16"},{"name":"America/Managua","_offset":"-6:00","_rule":"Nic","format":"C%sT","_until":"1992 Jan 1 4:00"},{"name":"America/Managua","_offset":"-5:00","_rule":"-","format":"EST","_until":"1992 Sep 24"},{"name":"America/Managua","_offset":"-6:00","_rule":"-","format":"CST","_until":"1993"},{"name":"America/Managua","_offset":"-5:00","_rule":"-","format":"EST","_until":"1997"},{"name":"America/Managua","_offset":"-6:00","_rule":"Nic","format":"C%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);