import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BotComponent } from './bot/bot.component';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { CoupensComponent } from './coupens/coupens.component';
import { SecurityComponent } from './security/security.component';
import { ProductsComponent } from './products/products.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    BotComponent,
    HomeComponent,
    CoupensComponent,
    SecurityComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule,
    MatButtonModule,
     MatIconModule,
     FormsModule,
     ReactiveFormsModule
  ]
})
export class MainModule { }
