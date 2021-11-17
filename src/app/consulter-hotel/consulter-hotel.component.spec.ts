import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterHotelComponent } from './consulter-hotel.component';

describe('ConsulterHotelComponent', () => {
  let component: ConsulterHotelComponent;
  let fixture: ComponentFixture<ConsulterHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
