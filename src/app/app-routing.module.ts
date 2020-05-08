import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

import {Routes , RouterModule} from '@angular/router';
import { EmployeeCreateComponent } from './components/Employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/Employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/Employee/employee-edit/employee-edit.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'wish-list' },
  { path: 'cart', component: CartComponent },
  { path: 'wish-list', component: WishlistComponent },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }