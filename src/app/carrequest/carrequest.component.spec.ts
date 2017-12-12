import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrequestComponent } from './carrequest.component';

describe('CarrequestComponent', () => {
  let component: CarrequestComponent;
  let fixture: ComponentFixture<CarrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
