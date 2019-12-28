// import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
// import { EmployeeRouting } from './employee-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeRoutingComponent } from './employee-routing/employee-routing.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatCardModule, MatButtonModule} from '@angular/material'
// import { AngularMaterialModule } from './../angular.material.shared.module';


@NgModule({
  declarations: [EmployeeComponent, EmployeeformComponent, EmployeeListComponent,  ],
  imports: [
    EmployeeRoutingModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    
  ]
})
export class EmployeeModule { }
