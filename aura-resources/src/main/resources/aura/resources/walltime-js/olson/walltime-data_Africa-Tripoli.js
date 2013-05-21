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
        rules: {"Libya":[{"name":"Libya","_from":"1951","_to":"only","type":"-","in":"Oct","on":"14","at":"2:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1952","_to":"only","type":"-","in":"Jan","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"1953","_to":"only","type":"-","in":"Oct","on":"9","at":"2:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1954","_to":"only","type":"-","in":"Jan","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"1955","_to":"only","type":"-","in":"Sep","on":"30","at":"0:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1956","_to":"only","type":"-","in":"Jan","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"1982","_to":"1984","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1982","_to":"1985","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"1985","_to":"only","type":"-","in":"Apr","on":"6","at":"0:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1986","_to":"only","type":"-","in":"Apr","on":"4","at":"0:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1986","_to":"only","type":"-","in":"Oct","on":"3","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"1987","_to":"1989","type":"-","in":"Apr","on":"1","at":"0:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1987","_to":"1989","type":"-","in":"Oct","on":"1","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"1997","_to":"only","type":"-","in":"Apr","on":"4","at":"0:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"1997","_to":"only","type":"-","in":"Oct","on":"4","at":"0:00","_save":"0","letter":"-"},{"name":"Libya","_from":"2013","_to":"max","type":"-","in":"Mar","on":"lastFri","at":"1:00","_save":"1:00","letter":"S"},{"name":"Libya","_from":"2013","_to":"max","type":"-","in":"Oct","on":"lastFri","at":"2:00","_save":"0","letter":"-"}]},
        zones: {"Africa/Tripoli":[{"name":"Africa/Tripoli","_offset":"0:52:44","_rule":"-","format":"LMT","_until":"1920"},{"name":"Africa/Tripoli","_offset":"1:00","_rule":"Libya","format":"CE%sT","_until":"1959"},{"name":"Africa/Tripoli","_offset":"2:00","_rule":"-","format":"EET","_until":"1982"},{"name":"Africa/Tripoli","_offset":"1:00","_rule":"Libya","format":"CE%sT","_until":"1990 May 4"},{"name":"Africa/Tripoli","_offset":"2:00","_rule":"-","format":"EET","_until":"1996 Sep 30"},{"name":"Africa/Tripoli","_offset":"1:00","_rule":"Libya","format":"CE%sT","_until":"1997 Oct 4"},{"name":"Africa/Tripoli","_offset":"2:00","_rule":"-","format":"EET","_until":"2012 Nov 10 2:00"},{"name":"Africa/Tripoli","_offset":"1:00","_rule":"Libya","format":"CE%sT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);