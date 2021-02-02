import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreditcardLoginComponent } from './creditcard-login/creditcard-login.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [

  
    { path: '',  component: FirstpageComponent },

    { path: 'Creditcardform',  component: CreditcardLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
