import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ApiCallService} from './api-call.service'
import { HttpClientModule } from '@angular/common/http';

import { CreditcardLoginComponent } from './creditcard-login/creditcard-login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
  
    CreditcardLoginComponent,
  
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
