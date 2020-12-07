import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName:['' , [Validators.minLength(5), Validators.required]],
      lastName:['' , Validators.minLength(6)],
      Email:['' ,[Validators.required , Validators.email]],
      pwd:[''], 
      confirmPwd:[''], 
      Tel:[''], 
    })
  }

  signUp(obj:any){
    console.log('this is my user' , obj);
    
  }

}
