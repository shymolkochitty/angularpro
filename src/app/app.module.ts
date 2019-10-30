import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TravelformComponent } from './travelform/travelform.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    TravelformComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
    AssetListComponent,
    CreateAssetComponent,
    AssetDetailsComponent,
    UpdateAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
