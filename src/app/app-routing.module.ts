import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/employee/create/create.component';
import { EditComponent } from './pages/employee/edit/edit.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ViewComponent } from './pages/employee/view/view.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/create', component: CreateComponent},
  {path: 'employee/:id/edit', component: EditComponent},
  {path: 'employee/:id/view', component: ViewComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
