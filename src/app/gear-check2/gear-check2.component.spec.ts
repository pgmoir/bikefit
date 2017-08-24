import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearCheck2Component } from './gear-check2.component';

describe('GearCheck2Component', () => {
  let component: GearCheck2Component;
  let fixture: ComponentFixture<GearCheck2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearCheck2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearCheck2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
