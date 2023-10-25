import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SignincomponentComponent } from './signincomponent/signincomponent.component';


@NgModule({
  declarations: [
    SignincomponentComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
