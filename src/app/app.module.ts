
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeCreateComponent } from './components/Employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/Employee/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/Employee/employee-edit/employee-edit.component';


import { ApiService } from './service/api.service';
import { EmployeeHeaderComponent } from './components/Employee/employee-header/employee-header.component';
import { HeaderComponent } from './components/header/header.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartComponent } from './components/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeHeaderComponent,
    HeaderComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }