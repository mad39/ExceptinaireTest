// import { EmployeeRouting } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { DetailsComponent } from "./details.component";
// export const EmployeeRouting: Route[] = [
//   {
//     path: '',
//     // component: DetailsComponent
//   }
// ];

const routes: Routes = [
    {
      path: '',
      component: EmployeeComponent,
      children: [
        {
          path: 'add-employee',
          component: EmployeeformComponent,
        },
        {
          path: 'employee-list',
          component: EmployeeListComponent,
        },
        {
            path: '',
            redirectTo: 'employee-list',
            pathMatch: 'full'
          },
          {
            path: '**',
            component: EmployeeComponent
          }
      ],
    //   canActivate: [AuthGuard],
    //   canActivateChild:[AuthGuard]
    }
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmployeeRoutingModule { }