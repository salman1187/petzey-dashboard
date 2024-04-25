import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';

interface Pet {
  name: string;
  species: string;
  age: number;
}

interface Owner {
  name: string;
  pets: Pet[];
}

interface Appointment {
  owner: Owner;
  pet: Pet;
  date: string;
  time: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  selectedDate: string = '';
openDatePicker() {
throw new Error('Method not implemented.');
}
  
  pets: Pet[] = [
    { name: 'Max', species: 'Dog', age: 3 },
    { name: 'Whiskers', species: 'Cat', age: 5 }
    // Add more pets as needed
  ];

  owners: Owner[] = [
    {
      name: 'John', pets: [this.pets[0]]
    },
    {
      name: 'Jane', pets: [this.pets[1]]
    }
    // Add more owners as needed
  ];

  appointments: Appointment[] = [
    { owner: this.owners[0], pet: this.owners[0].pets[0], date: '2024-04-30', time: '10:00 AM' },
    { owner: this.owners[1], pet: this.owners[1].pets[0], date: '2024-05-01', time: '11:00 AM' }
    // Add more appointments as needed
  ];
Total: any = 20;
Completed: any = 10;
Closed: any = 5;
Cancelled: any = 5;
filterAppointmentsByDate(): Appointment[] {
  console.log('Selected Date:', this.selectedDate);
  if (!this.selectedDate) {
    console.log('No date selected. Returning all appointments.');
    return this.appointments; // If no date selected, return all appointments
  }
  // Filter appointments based on the selected date
  const filteredAppointments = this.appointments.filter(appointment => appointment.date === this.selectedDate);
  console.log('Filtered Appointments:', filteredAppointments);
  return filteredAppointments;
}
}
