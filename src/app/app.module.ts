import { NgxSpinnerModule } from 'ngx-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FitnessComponent } from './fitness/fitness/fitness.component';
@NgModule({
  declarations: [
    AppComponent,
    FitnessComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,AppRoutingModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
