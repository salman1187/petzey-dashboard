import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Pet } from '../models/pet';
import { Owner } from '../models/owner';
import { Appointment } from '../models/appointment';
import { CardComponent } from '../card/card.component';
import { AppointmentCardDto } from '../models/AppointmentCard';
import { AppointmentService } from '../appointment.service';
import { AppointmentStats } from '../models/AppointmentStatusCount';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DoctorDashboardComponent  implements OnInit{
  offset : number = 0;
selectedStatus: any;
  onStatusChange() {
    this.getAppointmentsByStatus(this.selectedStatus);
}

onDateChange() {
  this.getAppointmentsByDate(this.selectedDate);
}
  constructor(private appointmentservice: AppointmentService) {}
  ngOnInit(): void {
    this.getAppointments();
    this.getAppointmentsByStatusCount();
  }
  appointmentCards: AppointmentCardDto[] = [];

  user : string = "Doctor";
  selectedDate: string = '';
  getAppointmentsByStatusCount(){
    this.appointmentservice.getAppointmentsByStatusCount().subscribe(data => {this.a = data})
  }
  
  a : AppointmentStats ={
    Total: "",
    Confirmed: "",
    Closed: "",
    Cancelled: ""
  }
  getAppointments(): void {
    this.appointmentservice.getAppointment().subscribe(data => {
      this.appointmentCards = data;
    });
  }
  getAppointmentsByStatus(selectedStatus: string) : void {}
  getAppointmentsByDate(selectedDate: string) : void {}
}
