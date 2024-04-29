import { Component } from '@angular/core';
import { AppointmentCardDto } from '../models/AppointmentCard';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-petappointment',
  standalone: true,
  imports: [FormsModule,CommonModule, CardComponent],
  templateUrl: './petappointment.component.html',
  styleUrl: './petappointment.component.css'
})
export class PetDashBoardComponent {
  appointmentCards: AppointmentCardDto[] = [
    {
      appointmentID: 1,
      doctorID: 1,
      petID: 1,
      petName: 'Doggo',
      petAge: 3,
      petGender: 'Male',
      ownerName: 'John',
      vetName: 'John',
      vetSpecialization: 'NAVLE',
      scheduleDate: new Date('2024-04-26T09:00:00')
    },
    {
      appointmentID: 2,
      doctorID: 2,
      petID: 2,
      petName: 'Fluffy',
      petAge: 2,
      petGender: 'Female',
      ownerName: 'Alice',
      vetName: 'Alice',
      vetSpecialization: 'Internal Medicine',
      scheduleDate: new Date('2024-04-27T10:30:00')
    }
  ];
  user : string = "Pet";
    selectedDate: any;
  
  }