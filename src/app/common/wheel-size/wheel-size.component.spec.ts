import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSizeComponent } from './wheel-size.component';

describe('WheelSizeComponent', () => {
  let component: WheelSizeComponent;
  let fixture: ComponentFixture<WheelSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
