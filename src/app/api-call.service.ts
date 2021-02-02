import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

private _url = "http://localhost:3000/cclogin";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };

  constructor(private http: HttpClient) { }


    PostDetails(body:any) {

    return this.http.post(this._url,body,this.httpOptions);
  }
  

}
















