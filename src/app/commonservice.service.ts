import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor() { }

  private subject = new Subject<any>();

  sendData(message: any) {
    //debugger;
      this.subject.next(message);
  }

  // clearMessages() {
  //     this.subject.next();
  // }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }
}
