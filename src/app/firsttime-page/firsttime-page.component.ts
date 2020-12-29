import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import {ApiCallService} from '../api-call.service'
import {CommonserviceService} from '../commonservice.service'
@Component({
  selector: 'app-firsttime-page',
  templateUrl: './firsttime-page.component.html',
  styleUrls: ['./firsttime-page.component.css']
})


export class FirsttimePageComponent implements OnInit, OnDestroy {
  
  dataTable:any=[];
  newarr:any=[];
  NewDataTable:any=[]
  LaunchBolean:boolean=false;
  FirstPageBolean:boolean=false;
  subscription: Subscription = new Subscription;
  

  constructor(private ApiCallService: ApiCallService,private CommonserviceService:CommonserviceService) { }

  ngOnInit() {
    
    debugger;
    this.subscription= this.ApiCallService.getuserDetails().subscribe((data:any)=>
    {
      debugger;
      //first time below data will call on load
      this.FirstPageBolean=true;
      this.dataTable=data
     // console.log("first time loading page response",this.dataTable);
     this.newarr= this.dataTable.map((o:any)=> {
       
      return { 
        image:o.links.mission_patch_small,
        mission_name:o.mission_name,
        flight_number:o.flight_number,
        missionid: o.mission_id[0],
        launch_year:o.launch_year,
        launch_success:o.launch_success,
        land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0]

      }
      
    }
    
    )
    this.NewDataTable.push(...this.newarr)
    console.log(" response on first page on load",this.NewDataTable);
    })
    
    //subject call-- button comp--> firstpage comp
    this.CommonserviceService.getMessage().subscribe((resp:any)=>{
      this.NewDataTable=[];
      this.FirstPageBolean=false;
      this.LaunchBolean=true;
      
      this.NewDataTable=resp;
      console.log("data received from button side on first page", this.NewDataTable)
    })
   
  }

  ngOnDestroy(){
   // to overcome memory leak 
    this.subscription.unsubscribe();

  }



}
