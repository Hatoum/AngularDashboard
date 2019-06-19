import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  users: User;
  userList: AngularFireList<any>;
  constructor(public  afAuth: AngularFireAuth, public  router: Router,public db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
    this.userList = this.db.list('users');
  }

  // Login  service auth

   async login(email: string, password: string) {

    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['admin/adminGet']);
      console.log('success');
    } catch (e) {
        alert('Error!'  +  e.message);
    }
    }

    // Register service auth

  async register(email: string, password: string ) {

     await this.afAuth.auth.createUserWithEmailAndPassword( email, password).then(user => {

        // this.router.navigate(['login']);
        console.log(user);
       }).catch(err => {
        alert('Error!'  +  err.message);
       });
    }
    // Logout srvice auth
addUserFirebase(firstName: string, lastName: string, email: string, pwdVerif: string) {
this.userList.push({
  fName: firstName,
  lName: lastName,
  Email: email,
  pswdVerif: pwdVerif
});

}
    async logout() {
      await this.afAuth.auth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['login']);
  }

  // is logged in service auth

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
}

