import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Control } from 'fabric/fabric-impl';
import { UserService } from 'src/app/service/user.service';
import { otp } from './otp.model';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
error_Msg: boolean=false;
otpLoginForm!:FormGroup
errorMsg:string = ''
responseData: any;
otpValue!:FormGroup;
otpObj : otp =new otp;


  constructor(private userService:UserService,private router:Router) {}



  ngOnInit(): void {
    this.otpLoginForm = new FormGroup({
      otpnumber: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25)])
    })
  }
  otpLogin(){

return this.userService.otpGen(this.otpLoginForm.value)
.subscribe(res =>{
  this.responseData = res;
  if(this.otpLoginForm.valid)
  {
    this.router.navigate(['main'])
  }
  else{
    alert("invalid otp");
 }
 if(!this.otpLoginForm){
  alert("enter otp")
 }
  // if(res!=null)
  // {
  //   this.responseData=res;
  //   console.log(res);
  // }

})
  }
}
