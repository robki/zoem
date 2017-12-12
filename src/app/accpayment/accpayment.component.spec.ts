import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccpaymentComponent } from './accpayment.component';

describe('AccpaymentComponent', () => {
  let component: AccpaymentComponent;
  let fixture: ComponentFixture<AccpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
