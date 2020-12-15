import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttimePageComponent } from './firsttime-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import {CommonserviceService}  from '../commonservice.service';

describe('FirsttimePageComponent', () => {
  let component: FirsttimePageComponent;
  let fixture: ComponentFixture<FirsttimePageComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirsttimePageComponent],
      imports: [BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterTestingModule,
        FormsModule
       
      ],
      providers: [
        CommonserviceService
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
        fixture = TestBed.createComponent(FirsttimePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //   it(`should render text as "Land success`, () => {

  //   // const fixture = TestBed.createComponent(FirsttimePageComponent);

  //   fixture.detectChanges();

  //   const appElement: HTMLElement = fixture.nativeElement;

  //   const h6: HTMLElement = appElement.querySelector('h6');

  //   expect(h6.textContent).toContain('Land Success');

  // });
  it(`should contains land success in p tag`, () => {

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h6').textContent).toContain('Land Success');

  });
});


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { RegistrationComponent } from './registration.component'
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from '../app-routing.module';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';
// import { SharedModule } from '../shared/shared.module';

// describe('RegistrationComponent', () => {
//   let component: RegistrationComponent;
//   let fixture: ComponentFixture<RegistrationComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [RegistrationComponent],
  //     imports: [BrowserModule,
  //       HttpClientModule,
  //       AppRoutingModule,
  //       RouterTestingModule,
  //       FormsModule,
  //       SharedModule
  //     ]
  //   })
  //     .compileComponents();
  // }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegistrationComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//   it(`should render text as "Please Register here" in a h1 tag`, () => {

//     // const fixture = TestBed.createComponent(LoginComponent);

//     fixture.detectChanges();

//     const appElement: HTMLElement = fixture.nativeElement;

//     const h1: HTMLElement = appElement.querySelector('h1');

//     expect(h1.textContent).toEqual('Please Register here ');

//   });

//   it(`should render 1Email address as label`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelector('label').textContent).toEqual('Email address');

//   });
//   it(`should render a text box to accept Email Id of User`, () => {

//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('input[type="email"][ name = "emailid"]')).toBeTruthy();

//   });
//   it(`should render a text box to accept password of User`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelector('input[type="password" ][ name="passwd"]')).toBeTruthy();

//   });
//   //for Label in form
//   it(`should render Password as label`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelectorAll('label')[1].textContent).toEqual('Password');

//   });
//   //label for First Name
//   it(`should render First Name as label`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelectorAll('label')[2].textContent).toEqual('First Name');

//   });
//   //label for Mobile Number
//   it(`should render 'Mobile Number' as label`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelectorAll('label')[5].textContent).toEqual('Mobile Number');

//   });
//   //label for location 
//   it(`should render Location as label`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelectorAll('label')[4].textContent).toEqual('Location');

//   });
//   //Sign in  button

//   it(`should render a submit button as Register`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelector('button').textContent).toEqual('Register');

//   });
//   //license year 
//   it(`should contains License year in p tag`, () => {

//     const compiled = fixture.nativeElement;

//     expect(compiled.querySelector('p').textContent).toContain('2020-2021');

//   });

// });

