import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttimePageComponent } from './firsttime-page.component';

describe('FirsttimePageComponent', () => {
  let component: FirsttimePageComponent;
  let fixture: ComponentFixture<FirsttimePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsttimePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttimePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
