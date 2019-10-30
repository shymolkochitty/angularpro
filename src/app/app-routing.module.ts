import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  //commented are the path of 1st exercise//
  // {path:'',pathMatch:'full',redirectTo:'login'},
  // {path:'login',component:LoginComponent},
  // {path:'admin',component:AdminComponent,canActivate:[AuthGuard]}
  {path:'',pathMatch:'full',redirectTo:'employee'},
  {path:'employees',component :EmployeeListComponent},
  {path:'add',component:CreateEmployeeComponent},
  {path:'update/:id',component:UpdateEmployeeComponent},
  {path:'details/:id',component:EmployeeDetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
