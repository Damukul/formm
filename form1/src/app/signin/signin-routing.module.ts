import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignincomponentComponent } from './signincomponent/signincomponent.component';

const routes: Routes = [
  {path:'signin', component:SignincomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
