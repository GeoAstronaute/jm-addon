System.register(['@angular/core', 'plugins-core'], function (exports, module) {
'use strict';
var Component, Extension;
return {
setters: [function (module) {
Component = module.Component;
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
    }
    MailjetViewComponent.prototype.ngOnInit = function () {
        console.log("Addon view INIT");
    };
    MailjetViewComponent = __decorate([
        Extension("materia-mailjet-view", []),
        Component({
            selector: "materia-mailjet-view",
            template: "<div class=\"mailjet\"> Mailjet </div> ",
            styles: [":host { flex: 1 1 0; display: flex; height: 100%; } mat-card { margin: 8px; padding: 0px; mat-list.mat-list { div { mat-list-item.mat-list-item { height: auto; } } } } .templates { mat-nav-list { mat-divider { width: 150px; } } } mat-tab { padding: 8px; } .mailjet_email::ng-deep .mat-list-item-content { flex-direction: column !important; } .mailjet::ng-deep .mat-tab-body-wrapper { display: flex; flex: 1; .mat-tab-body-content { display: flex; flex: 1; } } "]
        }),
        __metadata("design:paramtypes", [])
    ], MailjetViewComponent);
    return MailjetViewComponent;
}()));

}
};
});
