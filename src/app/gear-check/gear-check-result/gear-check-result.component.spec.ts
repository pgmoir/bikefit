import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearCheckResultComponent } from './gear-check-result.component';

describe('GearCheckResultComponent', () => {
  let component: GearCheckResultComponent;
  let fixture: ComponentFixture<GearCheckResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearCheckResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearCheckResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
