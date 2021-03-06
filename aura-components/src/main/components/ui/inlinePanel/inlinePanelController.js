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
({

    show: function (cmp, event, helper) {
        var callback = event.getParam && event.getParam('arguments').callback;
        helper.show(cmp, callback);
    },

    hide: function (cmp, event, helper) {
        var callback = event.getParam && event.getParam('arguments').callback;
        helper.hide(cmp, callback);
    },

    close: function (cmp, event, helper) {
        var callback = event.getParam && event.getParam('arguments').callback;
        helper.close(cmp, callback);
    },

    update: function(cmp, event, helper) {
        var args = event.getParam && event.getParam('arguments');
        helper.lib.panelLibCore.updatePanel(cmp, args.facets, args.callback);
    },

    setActive: function(cmp, event, helper) {
        helper.lib.panelLibCore.setActive(cmp, event.getParam('arguments').active);
    },

    onNotify: function(cmp, event, helper) {
        helper.lib.panelLibCore.handleNotify(cmp, event, helper);
    }


})// eslint-disable-line semi
