import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

private _url = "https://api.spaceXdata.com/v3/launches?limit=100";
private _urlSucessfulLaunch ="https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private http: HttpClient) { }


    getuserDetails() {

    return this.http.get(this._url);
  }
  //Launch Year 
  getYearResponse(y:any){
    var y=y;
    return this.http.get("https://api.spacexdata.com/v3/launches?limit=100&launch_year="+y);
   // https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
  }
  getLaunchtruefalse(a:boolean,b?:any){
    debugger;
   if(b){
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+a+"&launch_year="+b)
   }
   else{
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+a)
   }
  }
  getLandTrueFalse(l:boolean,launch?:any,year?:any){
    debugger;
    if(year && launch){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&land_success="+l+"&launch_success="+launch+"&launch_year="+year);
     }

    else if(year){
      return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&land_success="+l+"&launch_year="+year);
    }
    else 
return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+l);
//https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
  }

}
















