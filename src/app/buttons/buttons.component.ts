import { Component, OnInit } from '@angular/core';
import {ApiCallService} from '../api-call.service';
import {CommonserviceService} from '../commonservice.service'
@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  onloaddata:any=[];
  allTable:any=[];
  LaunchData:any=[];
  LandData:any=[];
  yearData:any=[];
  constructor(private ApiCallService: ApiCallService,private CommonserviceService:CommonserviceService) { }

  ngOnInit(): void {

    this.ApiCallService.getuserDetails().subscribe((resp:any)=>{

      this.onloaddata=resp;
      this.allTable=[...new Set(this.onloaddata.map((o:any)=>o.launch_year))]
      console.log(this.allTable)
    }
    )}

  year(b:any){
alert(b.target.value);
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
      land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0]
  
    }
    
  }
  
  )
  console.log("changed response on select year",YearDataTable)
  this.CommonserviceService.sendData(YearDataTable)
})
  }

  //success launch boolean
  launch(c:any){
alert(c.target.value)
this.ApiCallService.getLaunchtruefalse(c.target.value).subscribe((resp:any)=>{
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
    land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0]

  }
  
}

)
console.log("changed response on select launch",LaunchDataTable)
this.CommonserviceService.sendData(LaunchDataTable)
}

)}

land(d:any){
  alert(d.target.value)
  this.ApiCallService.getLandTrueFalse(d.target.value).subscribe((resp:any)=>{
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
      land_success:o.rocket.first_stage.cores.map((o:any)=>o.land_success)[0]
  
    }
    
  }
  
  )
  console.log("changed response on select landing",LandDataTable)
  this.CommonserviceService.sendData(LandDataTable)
  }
  
  )
}

}
