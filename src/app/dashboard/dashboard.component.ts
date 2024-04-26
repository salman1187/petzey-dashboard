import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Pet } from '../models/pet';
import { Owner } from '../models/owner';
import { Appointment } from '../models/appointment';
import { CardComponent } from '../card/card.component';
import { AppointmentCardDto } from '../models/AppointmentCard';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
  ngOnInit(): void {
  }
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
    vetSpecialization: 'Navle',
    scheduleDate: new Date('2024-04-27T10:30:00')
  }
];

  user : string = "Doctor";
  selectedDate: string = '';

  Total: any = 20;
  Confirmed: any = 10;
  Closed: any = 5;
  Cancelled: any = 5;











  // filterAppointmentsByDate(): Appointment[] {
//   console.log('Selected Date:', this.selectedDate);
//   if (!this.selectedDate) {
//     console.log('No date selected. Returning all appointments.');
//     return this.appointments; // If no date selected, return all appointments
//   }
  // Filter appointments based on the selected date
}
