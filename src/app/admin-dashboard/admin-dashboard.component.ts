import { Component, OnInit } from '@angular/core';
import { AppointmentStats } from '../models/AppointmentStatusCount';
import { CardComponent } from "../card/card.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppointmentCardDto } from '../models/AppointmentCard';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [CardComponent,FormsModule,CommonModule]
})
export class AdminDashboardComponent implements OnInit {
selectedDoctor: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
selectedStatus: any = "";
onStatusChange() {
throw new Error('Method not implemented.');
}
onDateChange() {
throw new Error('Method not implemented.');
}
  user : string = "Doctor";
  selectedDate: string = '';
  appointmentCards: AppointmentCardDto[] = [];

}
