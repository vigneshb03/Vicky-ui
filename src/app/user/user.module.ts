import { ReactiveFormsModule } from '@angular/forms';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { AuthGuard } from '../service/auth.guard';


@NgModule({
  declarations: [LoginComponent ,ForgotComponent,NotFoundComponent,SignupComponent, OtpComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers:[AuthGuard]
})
export class UserModule {
  constructor(){
    console.log("user works")
  }
}
