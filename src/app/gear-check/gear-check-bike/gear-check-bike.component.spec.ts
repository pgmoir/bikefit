import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearCheckBikeComponent } from './gear-check-bike.component';

describe('GearCheckBikeComponent', () => {
  let component: GearCheckBikeComponent;
  let fixture: ComponentFixture<GearCheckBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearCheckBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearCheckBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
