import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistDetailComponent } from './cyclist-detail.component';

describe('CyclistDetailComponent', () => {
  let component: CyclistDetailComponent;
  let fixture: ComponentFixture<CyclistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
