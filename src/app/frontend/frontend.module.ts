import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AngularMaterialModule } from '../angular-material.module';
import { ConfirmationDialogComponent } from './employee/modal/confirmation-dialog/confirmation-dialog.component';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/edit/edit.component';
import { ViewComponent } from './employee/view/view.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    EmployeeComponent, 
    ConfirmationDialogComponent,
    CreateComponent,
    EditComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    AngularMaterialModule
  ]
})
export class FrontendModule { }
