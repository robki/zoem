import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpageComponent } from './carpage.component';

describe('CarpageComponent', () => {
  let component: CarpageComponent;
  let fixture: ComponentFixture<CarpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
