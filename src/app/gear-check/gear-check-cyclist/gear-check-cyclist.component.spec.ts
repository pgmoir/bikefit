import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearCheckCyclistComponent } from './gear-check-cyclist.component';

describe('GearCheckCyclistComponent', () => {
  let component: GearCheckCyclistComponent;
  let fixture: ComponentFixture<GearCheckCyclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearCheckCyclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearCheckCyclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
