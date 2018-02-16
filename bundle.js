System.register(['@angular/core'], function (exports, module) {
'use strict';
var Component, Input, Output, EventEmitter;
return {
setters: [function (module) {
Component = module.Component;
Input = module.Input;
Output = module.Output;
EventEmitter = module.EventEmitter;
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
        Component({
            selector: "materia-mailjet-view",
            template: "<div fxLayout=\"column\" fxFlex class=\"mailjet\"> <div fxLayout=\"row\" style=\"height: 84px\"> <div [style.background]=\"'#FF5722'\" style=\"width: 120px; padding: 10px 0 18px; color: white;\"> <div style=\"text-align: center; font-size: 2.5em\">{{ nbEmails }}</div> <div style=\"text-align: center\">email{{ nbEmails > 1 ? 's' : '' }} sent</div> </div> <div style=\"padding-top: 15px; margin-left: 20px\" fxFlex *ngIf=\"app && app.addons && app.addons.addonsConfig['@materia/mailjet'] && app.addons.addonsConfig['@materia/mailjet'].from && app.addons.addonsConfig['@materia/mailjet'].apikey\"> Emails are sent from <strong>{{app.addons.addonsConfig['@materia/mailjet'].from}}</strong> with <strong>Mailjet</strong> <br>using the following Mailjet APIKey: <strong>{{app.addons.addonsConfig['@materia/mailjet'].apikey.substr(0, 5) + '*****' + app.addons.addonsConfig['@materia/mailjet'].apikey.substr(-5, 5)}} </strong> <br> <a style=\"cursor:pointer; text-decoration: underline;\" (click)=\"openSetup.emit()\">Edit the configuration</a> </div> <div style=\"padding-top: 15px; margin-left: 20px\" fxFlex *ngIf=\"app && app.addons && app.addons.addonsConfig['@materia/mailjet'] && (! app.addons.addonsConfig['@materia/mailjet'].from || !app.addons.addonsConfig['@materia/mailjet'].apikey)\"> You need to configure this addon to send email in your application. <br> <a style=\"cursor:pointer; text-decoration: underline;\" (click)=\"openSetup.emit()\">Configure it now!</a> </div> </div> <!-- <mat-card fxFlex fxLayout=\"column\"> <mat-tab-group fxFlex fxLayout=\"column\"> <mat-tab label=\"Emails\" fxLayout=\"column\" fxFlex> <div fxFlex fxLayout=\"column\"> <mat-card-title style=\"height: 50px; margin-bottom: 0px;\"> <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\"> <span>Latest emails sent</span> <span fxFlex></span> <button mat-icon-button matTooltip=\"Send an email\" *ngIf=\"app && app.addons && app.addons.addonsConfig['@materia/mailjet'] && app.addons.addonsConfig['@materia/mailjet'].from && app.addons.addonsConfig['@materia/mailjet'].apikey && app.addons.addonsConfig['@materia/mailjet'].secret\" (click)=\"send($event)\" style=\"margin-top: -15px; position: relative; top: 8px;\"> <mat-icon>send</mat-icon> </button> </div> </mat-card-title> <mat-card-content fxFlex fxLayout=\"column\" style=\"overflow:auto;\"> <div *ngIf=\"emails && emails.length == 0\" style=\"min-height: 140px;\" fxLayout=\"column\" fxLayoutAlign=\"center center\"> <p style=\"padding-left: 16px; margin-bottom: 15px;\"> <strong>No email has been sent yet</strong> </p> <button mat-button color=\"primary\" (click)=\"send($event)\">Send your first email now</button> </div> <div fxLayout=\"row\" fxFlex class=\"mailjet_email\"> <mat-list *ngIf=\"emails && emails.length > 0\" style=\"width: 100%;\" fxLayout=\"column\"> <div *ngFor=\"let email of emails\" fxLayout=\"column\"> <mat-list-item fxLayout=\"column\" style=\"flex-direction: column !important;\"> <div fxLayout=\"row\" style=\"width: 100%;\"> <h3 style=\"font-size: 15px; width: 100%; color: #FF5722;\" fxLayout=\"row\"> {{ email.to }} <span fxFlex></span> <span style=\"font-size: 0.8rem\">{{email.date_sent | date}}</span> </h3> </div> <div fxLayout=\"row\" style=\"width: 100%;\"> <p style=\"width: 100%; margin-top: 0px; font-size: 13px;\"> <strong>{{ email.subject }}</strong> - {{ email.body }} </p> </div> </mat-list-item> <mat-divider></mat-divider> </div> </mat-list> </div> </mat-card-content> </div> </mat-tab> <mat-tab label=\"Templates\" fxLayout=\"row\" fxFlex> <div fxLayout=\"column\" style=\"width: 150px; text-align: center;\"> <div> <h3>Templates</h3> </div> <div *ngIf=\"! templates || (templates && ! templates.length)\"> <span>No template</span> </div> <div *ngIf=\"templates && templates.length\" class=\"templates\"> <mat-nav-list> <mat-divider></mat-divider> <div *ngFor=\"let template of templates\" style=\"width: 100%;\"> <mat-list-item (click)=\"selectTemplate(template)\">{{template.name}}</mat-list-item> <mat-divider></mat-divider> </div> </mat-nav-list> </div> </div> <div fxFlex fxLayout=\"column\"> <div fxFlex fxLayout=\"column\" *ngIf=\"templateSelected\"> <mat-card fxFlex fxLayout=\"column\" style=\"padding: 0px;\"> <div style=\"padding-left: 15px; height: 50px;\"> <div fxLayoutAlign=\"center center\" style=\"height: 100%;\"> <span style=\"font-size: 15px;\">{{ templateSelected.name }}</span> </div> </div> <materia-monaco-editor #editor [code]=\"templateSelected.code\" [monacoEditorOpts]=\"{language: 'html', theme: 'vs-dark'}\" (codeChange)=\"lastCodeEv($event)\" fxFlex></materia-monaco-editor> <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 50px;\"> <button mat-raised-button style=\"margin: 5px 0px\" (click)=\"cancel($event)\">CANCEL</button> <button mat-raised-button style=\"margin: 5px 0px\" color=\"primary\" (click)=\"loadPreview(lastUpdatedCode)\">SAVE</button> </div> </mat-card> </div> <div fxFlex fxLayout=\"row\" *ngIf=\"templateSelected\" style=\"background: orange\"> <div fxFlex id=\"template-preview\" [innerHTML]=\"code | safeHtml\" *ngIf=\"code\"> </div> </div> </div> </mat-tab> </mat-tab-group> </mat-card> --> </div>",
            styles: [":host { flex: 1 1 0; display: flex; height: 100%; } mat-card { margin: 8px; padding: 0px; mat-list.mat-list { div { mat-list-item.mat-list-item { height: auto; } } } } .templates { mat-nav-list { mat-divider { width: 150px; } } } mat-tab { padding: 8px; } .mailjet_email::ng-deep .mat-list-item-content { flex-direction: column !important; } .mailjet::ng-deep .mat-tab-body-wrapper { display: flex; flex: 1; .mat-tab-body-content { display: flex; flex: 1; } } "]
        }),
        __metadata("design:paramtypes", [])
    ], MailjetViewComponent);
    return MailjetViewComponent;
}()));

}
};
});
