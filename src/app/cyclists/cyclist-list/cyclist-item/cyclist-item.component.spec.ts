import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistItemComponent } from './cyclist-item.component';

describe('CyclistItemComponent', () => {
  let component: CyclistItemComponent;
  let fixture: ComponentFixture<CyclistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
