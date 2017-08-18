import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclistsComponent } from './cyclists.component';

describe('CyclistsComponent', () => {
  let component: CyclistsComponent;
  let fixture: ComponentFixture<CyclistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
