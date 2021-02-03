import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  clicked(){
    this._router.navigate(['Creditcardform'])
     }
}
