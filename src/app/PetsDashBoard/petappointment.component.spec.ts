import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetappointmentComponent } from './petappointment.component';

describe('PetappointmentComponent', () => {
  let component: PetappointmentComponent;
  let fixture: ComponentFixture<PetappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetappointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
