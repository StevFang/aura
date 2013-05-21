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
        rules: {},
        zones: {"Africa/Kampala":[{"name":"Africa/Kampala","_offset":"2:09:40","_rule":"-","format":"LMT","_until":"1928 Jul"},{"name":"Africa/Kampala","_offset":"3:00","_rule":"-","format":"EAT","_until":"1930"},{"name":"Africa/Kampala","_offset":"2:30","_rule":"-","format":"BEAT","_until":"1948"},{"name":"Africa/Kampala","_offset":"2:45","_rule":"-","format":"BEAUT","_until":"1957"},{"name":"Africa/Kampala","_offset":"3:00","_rule":"-","format":"EAT","_until":""}]}
    };
    window.WallTime.autoinit = true;
}).call(this);