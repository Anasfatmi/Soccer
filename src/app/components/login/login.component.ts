import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:any={};
  loginForm:FormGroup;
  constructor(private x:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.x.group({
      email:[''],
      pwd:[''],
    })
  }
  addlogin(){
    console.log('here my object', this.login);

  }

}
