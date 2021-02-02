import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiCallService } from '../api-call.service';
import {cclogin} from '../cclogin.model';

@Component({
  selector: 'app-creditcard-login',
  templateUrl: './creditcard-login.component.html',
  styleUrls: ['./creditcard-login.component.css']
})
export class CreditcardLoginComponent implements OnInit,OnDestroy {
 
  GivenDate: any;
  CurrentDate: any;
  GivenDate1:any;
  $subscription: Subscription = new Subscription;
  myForm:FormGroup;
  constructor(private _fb:FormBuilder,private _ccservice:ApiCallService) {
   this.CurrentDate='';
  this.GivenDate='';
  
   }
  
 
  ngOnInit(): void {
    
    this.myForm=this._fb.group({
      CreditCardNumber:['',[Validators.required]],
      CardHolder:['',[Validators.required]],
      ExpirationDate:['',[this.dateValidator]],
      SecurityCode:[],
      amount:['',[Validators.required,Validators.minLength(2)]]

    })
    this.CurrentDate=new Date().toLocaleDateString().replace('/','-').replace('/','-');
    //console.log("current date",this.CurrentDate)

  }

  onSubmit(loginvalue:NgForm){
    console.log(loginvalue.value);
    
    this.$subscription=this._ccservice.PostDetails(loginvalue.value).subscribe((resp:any)=>{
    console.log(resp);
    Swal.fire('Success !','Your Details is successfully submitted','success');
    this.myForm.reset();
    })
  }
  datea(event:any){
//console.log('select format',event.target.value)
   this.GivenDate=(event.target.value); //2021-02-02
  
  }
  
  
  
  
  
  dateValidator (control: AbstractControl):{[key: string]: boolean} | null {
    let ti=new Date().toLocaleDateString().replace('/','-').replace('/','-').split('-').reverse();
    let finaltimeformat=[ti[0],ti[2].padStart(2, '0'),ti[1].padStart(2, '0')].join('-')
    console.log("current date format",finaltimeformat)
  
     console.log("input date format",control.value)
    if( control.value !==null && (control.value <= finaltimeformat )){
      return {'dateValidator1': true}
    }
    return null;
  };

  ngOnDestroy(){
    //to overcome memory leakage 
    this.$subscription.unsubscribe();
  }
}

