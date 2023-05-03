import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitnessComponent } from './fitness/fitness/fitness.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'fitness',component:FitnessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
