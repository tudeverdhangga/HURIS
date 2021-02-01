import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeRequestComponent } from './pages/employee/employee-request/employee-request.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/:mode', component: EmployeeRequestComponent},
  {path: 'employee/:id/:mode', component: EmployeeRequestComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
