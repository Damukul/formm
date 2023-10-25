import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { SignupModule } from './signup/signup.module';
import { LoginModule } from './login/login.module';
import { Signup1Component } from './signup1/signup1.component';
import { Login1Component } from './login1/login1.component';
import { SigninModule } from './signin/signin.module';

const routes: Routes = [
  { 
    path:'signupmodule', loadChildren: ()=> import('./signup/signup.module').then(m=>m.SignupModule)
  },
  {
    path:'loginmodule', loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'signinmodule', loadChildren:()=>import('./signin/signin.module').then(m=>m.SigninModule)
  },
  {path:'signup1', component:Signup1Component},
  {path:'login1',component:Login1Component}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
