import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LocationComponent } from './HR/Location/location.component';
import { DepartmentComponent } from './HR/Department/department.component';
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: '', redirectTo: 'location', pathMatch: 'full' },
        { path: 'location', component: LocationComponent },
        { path: 'department', component: DepartmentComponent },
        { path: '**', redirectTo: 'home' }
    ])
    ],
    declarations: [AppComponent, LocationComponent, DepartmentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
