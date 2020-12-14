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
  getLaunchtruefalse(a:boolean){
   // debugger;
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+a)

  }
  getLandTrueFalse(l:boolean){
return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+l);
  }
  getYearResponse(y:any){
    return this.http.get("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+y);
  }
}
















