import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'signupmodule' , loadChildren:()=> import('./signup/signup.module').then(m=>m.SignupModule)},
  {path:'Loginmodule', loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }