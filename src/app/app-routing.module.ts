import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { GetComponent } from './user/get/get.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { GetAdminComponent } from './admin/get-admin/get-admin.component';
import { AddComponent } from './user/add/add.component';



const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'auth', component: AuthComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'forgotpassword', component: ForgotPasswordComponent},


  { path: 'user' , component: UserComponent , children : [
    { path: 'userAdd' , component : AddComponent},
    { path : 'userGet' , component : GetComponent }
  ]},

  { path: 'admin', component: AdminComponent , children : [
    { path: 'adminAdd' , component : AddAdminComponent},
    { path : 'adminGet' , component : GetAdminComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AuthComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent,
   UserComponent , AddComponent , GetComponent,
   AdminComponent , AddAdminComponent , GetAdminComponent];
