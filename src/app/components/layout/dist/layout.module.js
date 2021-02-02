"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LayoutModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var layout_routing_module_1 = require("./layout-routing.module");
var shared_module_1 = require("./../../shared/shared.module");
var layout_component_1 = require("./layout.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            declarations: [layout_component_1.LayoutComponent, dashboard_component_1.DashboardComponent],
            imports: [
                common_1.CommonModule,
                layout_routing_module_1.LayoutRoutingModule,
                shared_module_1.SharedModule,
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
