import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeStartComponent } from './bike-start.component';

describe('BikeStartComponent', () => {
  let component: BikeStartComponent;
  let fixture: ComponentFixture<BikeStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
