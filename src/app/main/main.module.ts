import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { BotComponent } from './bot/bot.component';
import {MatSidenavModule} from '@angular/material/sidenav'

@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    HeaderComponent,
    BotComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSidenavModule
  ]
})
export class MainModule { }
