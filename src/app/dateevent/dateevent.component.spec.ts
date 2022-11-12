import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateeventComponent } from './dateevent.component';

describe('DateeventComponent', () => {
  let component: DateeventComponent;
  let fixture: ComponentFixture<DateeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
