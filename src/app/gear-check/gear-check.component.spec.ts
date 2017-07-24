import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearCheckComponent } from './gear-check.component';

describe('GearCheckComponent', () => {
  let component: GearCheckComponent;
  let fixture: ComponentFixture<GearCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
