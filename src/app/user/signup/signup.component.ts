import { UserService } from './../../service/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Signupmodel } from './signup';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  signupModelObj:Signupmodel = new Signupmodel();
  constructor(private formBuilder:FormBuilder,private user:UserService) { }
  eye:boolean=true;
  eyeSlash :boolean =false;
  submitted :boolean=false;
  loading:boolean=false;

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      username:['',[Validators.required]],
      email:['' ,[Validators.required]],
      password:['',[Validators.required,Validators.minLength(6)]]
    })

  }
  get f()
  {
    return this.registerForm.controls
  }
  submitForm()
  {
    this.signupModelObj.username= this.registerForm.value.username;
    this.signupModelObj.email=this.registerForm.value.email;
    this.signupModelObj.password=this.registerForm.value.password;
    this.user.postRegister(this.signupModelObj)
    .subscribe(res=>{
      console.log(res);
      this.registerForm.reset();
      if(this.registerForm.invalid)
      {
        return;
      }
      this.loading = true;
      alert("Registered Successfully");
      }
      ,err=>{
        alert("Some thing went Wrong");
      })
  }

  showpassword(){
    this.eye=false;
    this.eyeSlash=true;

  }
  hidepassword(){
    this.eye=true;
    this.eyeSlash=false;
  }

}
