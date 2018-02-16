System.register(['@angular/core', 'plugins-core'], function (exports, module) {
'use strict';
var Component, Input, Output, EventEmitter, Extension;
return {
setters: [function (module) {
Component = module.Component;
Input = module.Input;
Output = module.Output;
EventEmitter = module.EventEmitter;
}, function (module) {
Extension = module.Extension;
}],
execute: function () {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */







function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}



function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var MailjetViewComponent = (exports('MailjetViewComponent', function () {
    function MailjetViewComponent() {
        this.emails = [];
        this.openSetup = new EventEmitter();
    }
    MailjetViewComponent.prototype.ngOnInit = function () {
        console.log("Addon view INIT");
        this.init();
        this.loadTemplates();
    };
    MailjetViewComponent.prototype.cancel = function () {
        console.log("Click cancel");
    };
    MailjetViewComponent.prototype.send = function (ev) {
    };
    MailjetViewComponent.prototype.init = function () {
        var _this = this;
        if (this.app && this.app.entities && this.app.entities.get("mailjet")) {
            this.app.entities.get("mailjet").getQuery("latest").run().then(function (emails) {
                _this.emails = emails.data.slice();
                _this.nbEmails = emails.count;
            }).catch(function (e) {
                console.log("error", e, e.stack);
            });
        }
        else {
            setTimeout(function () {
                _this.init();
            }, 100);
        }
    };
    MailjetViewComponent.prototype.loadTemplates = function () {
        var _this = this;
        this.app.entities.get("mailjet").getQuery("getTemplates").run().then(function (files) {
            _this.templates = files;
        });
    };
    MailjetViewComponent.prototype.selectTemplate = function (template) {
        this.templateSelected = Object.assign({}, template);
        this.lastUpdatedCode = template.code;
        this.loadPreview(template.code);
    };
    MailjetViewComponent.prototype.lastCodeEv = function (ev) {
        this.lastUpdatedCode = ev;
        return this.loadPreview(ev);
    };
    MailjetViewComponent.prototype.loadPreview = function (code) {
        this.code = code;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MailjetViewComponent.prototype, "app", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], MailjetViewComponent.prototype, "openSetup", void 0);
    MailjetViewComponent = __decorate([
        Extension("materia-mailjet-view", []),
        Component({
            selector: "materia-mailjet-view",
            template: "<div class=\"mailjet\">Mailjet</div>"
        }),
        __metadata("design:paramtypes", [])
    ], MailjetViewComponent);
    return MailjetViewComponent;
}()));

}
};
});
