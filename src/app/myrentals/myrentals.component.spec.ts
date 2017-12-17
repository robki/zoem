import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrentalsComponent } from './myrentals.component';

describe('MyrentalsComponent', () => {
  let component: MyrentalsComponent;
  let fixture: ComponentFixture<MyrentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
