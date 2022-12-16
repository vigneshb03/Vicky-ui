import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SignupComponent } from './signup/signup.component';

const userRoutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'signup',component:SignupComponent},
  {path:'otp',component:OtpComponent},
  {path:'main',loadChildren:()=>import('../main/main.module').then(m=>m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
