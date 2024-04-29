import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Appointment } from '../models/appointment';
import { AppointmentCardDto } from '../models/AppointmentCard';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input()
  appointmentcard!: AppointmentCardDto;
  @Input()
  user : string="";

  clicked() {
    console.log(this.appointmentcard.OwnerName);
  }

  ngOnInit(): void {
    
  }
}