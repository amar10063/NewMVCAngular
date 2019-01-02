"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var location_component_1 = require("./HR/Location/location.component");
var department_component_1 = require("./HR/Department/department.component");
var designation_component_1 = require("./HR/Designation/designation.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'location', pathMatch: 'full' },
                    { path: 'location', component: location_component_1.LocationComponent },
                    { path: 'department', component: department_component_1.DepartmentComponent },
                    { path: 'designation', component: department_component_1.DepartmentComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            declarations: [app_component_1.AppComponent, location_component_1.LocationComponent, department_component_1.DepartmentComponent, designation_component_1.DesignationComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map