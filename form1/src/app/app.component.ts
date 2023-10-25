import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form1';
  constructor( public router  : Router)
  {

  }
  signup()
  {
    this.router.navigateByUrl('signup/signupcomponent');
  }
  Login()
  {
    this.router.navigateByUrl('Login/Logincomponent');
  }
}
