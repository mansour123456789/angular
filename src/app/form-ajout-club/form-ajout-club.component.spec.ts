import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutClubComponent } from './form-ajout-club.component';

describe('FormAjoutClubComponent', () => {
  let component: FormAjoutClubComponent;
  let fixture: ComponentFixture<FormAjoutClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAjoutClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAjoutClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
