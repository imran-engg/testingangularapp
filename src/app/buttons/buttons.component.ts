import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {ApiCallService} from '../api-call.service';
import {CommonserviceService} from '../commonservice.service'
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit,OnDestroy {
  onloaddata:any=[];
  allTable:any=[];
  LaunchData:any=[];
  LandData:any=[];
  yearData:any=[];
  yearselected:any;
  subscription1: Subscription = new Subscription;
  isActive:boolean=false;
  landing:any;
  launchbool:any;
  stateOfButton:any= [];
  constructor(private ApiCallService: ApiCallService,private CommonserviceService:CommonserviceService) { }

  ngOnInit(): void {

    this.ApiCallService.getuserDetails().subscribe((resp:any)=>{

      this.onloaddata=resp;
      this.allTable=[...new Set(this.onloaddata.map((o:any)=>o.launch_year))]
      // console.log(this.allTable)
      this.stateOfButton = Array(this.allTable.length).fill(false);
      console.log('all button boolean values',this.stateOfButton)
    }
    )}

    ngOnDestroy(){
      //overcome memory leak
      this.subscription1.unsubscribe();
    }

  year(b:any,index:any){
//alert(b.target.value +"index:"+index);
//this.isActive=false;
this.isActive=!this.isActive;
console.log("toggle ",this.isActive);
this.stateOfButton.fill(false);
this.stateOfButton[index]=!this.stateOfButton[index];
//console.log('after click on particular button',this.stateOfButton)
this.yearselected=b.target.value
this.ApiCallService.getYearResponse(b.target.value).subscribe((resp:any)=>
{
  this.yearData=resp;
  var YearDataTable=this.yearData.map((o:any)=> {
       
    return { 
      image:o.links.mission_patch_small,
      mission_name:o.mission_name,
      flight_number:o.flight_number,
      missionid: o.mission_id[0],
      launch_year:o.launch_year,
      launch_success:o.launch_success,
      land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0],
      isAcitveboolean:this.isActive
  
    }
    
  }
  
  )
  console.log("changed response on select year",YearDataTable)
  this.CommonserviceService.sendData(YearDataTable)
})
  }

  //success launch boolean
  launch(c:any){
//alert(c.target.value)
this.launchbool=c.target.value;
this.ApiCallService.getLaunchtruefalse(c.target.value,this.yearselected).subscribe((resp:any)=>{
//console.log('response for Launch',resp);
this.LaunchData=resp
//console.log('this.LaunchData',this.LaunchData);

 var LaunchDataTable=this.LaunchData.map((o:any)=> {
       
  return { 
    image:o.links.mission_patch_small,
    mission_name:o.mission_name,
    flight_number:o.flight_number,
    missionid: o.mission_id[0],
    launch_year:o.launch_year,
    launch_success:o.launch_success,
    land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0],
    isAcitveboolean:this.isActive

  }
  
}

)
console.log("changed response on select launch",LaunchDataTable)
this.CommonserviceService.sendData(LaunchDataTable)
}

)}

land(d:any){
  //alert(d.target.value)
  this.landing=d.target.value;
  this.ApiCallService.getLandTrueFalse(d.target.value,this.launchbool,this.yearselected).subscribe((resp:any)=>{
  console.log('response for LandDataTable',resp);
  this.LandData=resp
  console.log('this.LandDataTable',this.LandData);
  
   var LandDataTable=this.LandData.map((o:any)=> {
         
    return { 
      image:o.links.mission_patch_small,
      mission_name:o.mission_name,
      flight_number:o.flight_number,
      missionid: o.mission_id[0],
      launch_year:o.launch_year,
      launch_success:o.launch_success,
      land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0],
      isAcitveboolean:this.isActive
  
    }
    
  }
  
  )
  console.log("changed response on select landing",LandDataTable)
  this.CommonserviceService.sendData(LandDataTable)
  }
  
  )
}

}
