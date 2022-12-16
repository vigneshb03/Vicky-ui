import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!:FormGroup;
errorMsg=false;
customerid :any;
editdata:any;
responsedata:any;
eye:boolean=true;
eyeSlash:boolean=false;
validMsg:string='';
valid_Msg :boolean =false;
  constructor(private formBuilder:FormBuilder,private service:UserService,private router:Router)
  {
    localStorage.clear();

   }
   Login = new FormGroup(
    {
      username : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    }
   );
  ngOnInit(): void {
    this.Login;
  }
  loginSubmit()
  {

this.service.postRegister(this.Login.value).subscribe(res =>{
  if(this.Login.valid){
    this.router.navigate(['otp'])
    console.log(res);
  }
    else
    {
      if(!this.Login.valid)
      {
        this.validMsg='usename and password is Invalid!!!'
        this.valid_Msg = true;
        setTimeout(()=>{
          this.valid_Msg = false;
        },3000)
      }

    }
  })}
  hidepassword()
  {

  }
  showpassword()
  {

  }
}
