import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsresultComponent } from './carsresult.component';

describe('CarsresultComponent', () => {
  let component: CarsresultComponent;
  let fixture: ComponentFixture<CarsresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
