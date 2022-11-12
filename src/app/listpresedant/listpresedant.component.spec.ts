import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpresedantComponent } from './listpresedant.component';

describe('ListpresedantComponent', () => {
  let component: ListpresedantComponent;
  let fixture: ComponentFixture<ListpresedantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpresedantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpresedantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
