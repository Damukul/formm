import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent {
  loginform! : FormGroup;
  constructor( private fb : FormBuilder)
  {}
  ngOnInit()
  {
console.log('on init calling');
this.logindetails();
  }

  logindetails()
  {
this.loginform=this.fb.group({userName:['',[Validators.required, Validators.maxLength(10)]]})
  }
  submit()
  {
    console.log('userName', this.loginform.value);
  }
}


