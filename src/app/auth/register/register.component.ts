import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  constructor(public  authService: AuthService , public formBuilder: FormBuilder , public db: AngularFireDatabase) {

    this.Register = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
      pwdVerif : new FormControl()
    });
     }



  Register: FormGroup;
    //    firstName = this.Register.value.firstName;
    //  lastName = this.Register.value.lastName;
    //  email = this.Register.value.email;
    //  pswdVerif = this.Register.value.pswdVerif;
  ngOnInit() {
  }
  register() {

    const email = this.Register.value.email;
    const password = this.Register.value.password;
    this.authService.register(email, password);
  }
  addUser() {

    const firstName = this.Register.value.firstName;
    const lastName = this.Register.value.lastName;
    const email = this.Register.value.email;
    const pswdVerif = this.Register.value.pwdVerif;

    this.authService.addUserFirebase(firstName, lastName, email, pswdVerif);
  }

}
// this.fa.auth.createUserWithEmailAndPassword(this.Login.get('email').value, this.Login.get('password').value).then(user => {
//   console.log(user);
// }).catch(err => {
//   console.log(err);
// });
