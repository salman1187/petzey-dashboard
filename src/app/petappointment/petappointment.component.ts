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
export class PetappointmentComponent {
  appointmentCards: AppointmentCardDto[] = [];
  user : string = "Pet";
    selectedDate: any;
  
  }