import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { LocationComponent } from './HR/Location/location.component';
import { DepartmentComponent } from './HR/Department/department.component';
import { DesignationComponent } from './HR/Designation/designation.component';
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: '', redirectTo: '', pathMatch: 'full' },
        { path: 'location', component: LocationComponent },
        { path: 'department', component: DepartmentComponent },
        { path: 'designation', component: DepartmentComponent },
        { path: '**', redirectTo: 'home' }
    ])
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    declarations: [AppComponent, LocationComponent, DepartmentComponent, DesignationComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
