import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {path:'',component:DashboardComponent
,
children:[{path:'',component:HomeComponent},
{path:'coupens',component:CoupensComponent},
{path:'products',component:ProductsComponent},
{path:'security',component:SecurityComponent}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
