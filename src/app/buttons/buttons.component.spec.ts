import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';
import {CommonserviceService}  from '../commonservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsComponent],
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
    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
