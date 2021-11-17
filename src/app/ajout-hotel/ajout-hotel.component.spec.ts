import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutHotelComponent } from './ajout-hotel.component';

describe('AjoutHotelComponent', () => {
  let component: AjoutHotelComponent;
  let fixture: ComponentFixture<AjoutHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
