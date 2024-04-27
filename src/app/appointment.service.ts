import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentCardDto } from './models/AppointmentCard';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  getAppointment():Observable<AppointmentCardDto[]>{
    const apiurl : string = "http://localhost:3000/appointments";
    return this.http.get<AppointmentCardDto[]>(apiurl);
  }
  getAppointmentByStatus():Observable<AppointmentCardDto[]>{
    const apiurl : string = ""//http://localhost:3000/appointments";
    return this.http.get<AppointmentCardDto[]>(apiurl);
  }
  getAppointmentByDate():Observable<AppointmentCardDto[]>{
    const apiurl : string =""// "http://localhost:3000/appointments";
    return this.http.get<AppointmentCardDto[]>(apiurl);
  }
  getAppointmentsByStatusCount(): Observable<any> {
    const apiurl : string ="http://localhost:3000/status"
    return this.http.get<any>(apiurl);
  }
}
