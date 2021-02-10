import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ConfirmationDialogComponent } from './pages/employee/confirmation-dialog/confirmation-dialog.component';
import { EmployeeRequestComponent } from './pages/employee/employee-request/employee-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgKnifeModule } from 'ng-knife';
import { ChartsModule } from 'ng2-charts';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    EmployeeComponent,
    ConfirmationDialogComponent,
    EmployeeRequestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule,
    NgDialogAnimationService,
    ReactiveFormsModule,
    NgKnifeModule,
    ChartsModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
