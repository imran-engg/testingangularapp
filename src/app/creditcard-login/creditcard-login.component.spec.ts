import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardLoginComponent } from './creditcard-login.component';

describe('CreditcardLoginComponent', () => {
  let component: CreditcardLoginComponent;
  let fixture: ComponentFixture<CreditcardLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
