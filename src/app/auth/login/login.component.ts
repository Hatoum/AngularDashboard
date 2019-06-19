import { Component, OnInit } from '@angular/core';
import { AdminComponent } from 'src/app/admin/admin.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Login: FormGroup;
  constructor(public  authService: AuthService , public formBuilder: FormBuilder ) {
    this.Login = new FormGroup({
      email : new FormControl(),
      password : new FormControl()
    });
   }

  ngOnInit() {
    this.Login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
login() {
const email = this.Login.get('email').value;
const password = this.Login.get('password').value;
this.authService.login(email, password);
 }
}




