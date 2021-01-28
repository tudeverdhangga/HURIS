import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [
    DashboardComponent, 
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    AngularMaterialModule
  ]
})
export class FrontendModule { }
