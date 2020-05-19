import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioMaterialComponent } from './radio-material.component';

describe('RadioMaterialComponent', () => {
  let component: RadioMaterialComponent;
  let fixture: ComponentFixture<RadioMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
