import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { Signup1Component } from './signup1/signup1.component';
import { Login1Component } from './login1/login1.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    Signup1Component,
    Login1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
