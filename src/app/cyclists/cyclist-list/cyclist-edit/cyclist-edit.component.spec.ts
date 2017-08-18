import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistEditComponent } from './cyclist-edit.component';

describe('CyclistEditComponent', () => {
  let component: CyclistEditComponent;
  let fixture: ComponentFixture<CyclistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
