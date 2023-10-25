import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    LogincomponentComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule {
 
 }
