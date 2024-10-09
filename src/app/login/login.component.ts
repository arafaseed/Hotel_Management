import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  hide = true;  // to toggle password visibility
username='';
password ='';
errorMessage="";
  constructor(private fb: FormBuilder,private route:Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.route.navigateByUrl("/dashboard");
      console.log(this.loginForm.value);  // Handle login logic here
    }
  }
}

