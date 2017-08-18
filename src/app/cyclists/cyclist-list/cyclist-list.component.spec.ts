import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistListComponent } from './cyclist-list.component';

describe('CyclistListComponent', () => {
  let component: CyclistListComponent;
  let fixture: ComponentFixture<CyclistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
