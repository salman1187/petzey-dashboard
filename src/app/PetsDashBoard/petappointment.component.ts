import { Component, OnInit } from '@angular/core';
import { AppointmentCardDto } from '../models/AppointmentCard';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FilterParams } from '../models/FilterParams';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-petappointment',
  standalone: true,
  imports: [FormsModule,CommonModule, CardComponent],
  templateUrl: './petappointment.component.html',
  styleUrl: './petappointment.component.css'
})
export class PetDashBoardComponent implements OnInit {
  
  constructor(private appointmentService: AppointmentService) {}

  filters: FilterParams = {scheduleDate : null, status:"", doctorID: 1}
  ngOnInit(): void {
    this.appointmentService.getAppointmentsWithFilter(this.filters).subscribe(data => {
      this.appointmentCards = data;
      console.log(this.appointmentCards);
    })
  }
  appointmentCards: AppointmentCardDto[] = [];
  user : string = "Pet";
    selectedDate: any;
selectedStatus: any = "";
onStatusChange() {

}
  
  }