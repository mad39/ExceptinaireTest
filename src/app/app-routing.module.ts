import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: 'employee',  loadChildren: 'src/app/employee/employee.module#EmployeeModule' },
  // { path: 'employee', loadChildren: 'app/employee/employee-routing.module#EmployeeRoutingModule' },
  // { path: 'personal',  loadChildren: 'src/app/modules/personal/personal.module#PersonalModule' },
  // { path: 'share-profile', loadChildren: 'src/app/modules/share-profile/share-profile.module#ShareProfileModule' },
  // { path: 'corporate',  loadChildren: 'src/app/modules/corporate/corporate.module#CorporateModule' },
  // { path: 'internal',  loadChildren: 'src/app/modules/internal/internal.module#InternalModule' },
  // { path: 'error', loadChildren: 'src/app/helper/helper.module#HelperModule' },
  { path: '**', redirectTo: 'employee' },
  // { path: 'admin', loadChildren: () => import(`./employee/employee.module`).then(m => m.EmployeeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
