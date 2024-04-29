import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentCardDto } from './models/AppointmentCard';
import { FilterParams } from './models/FilterParams';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  getAppointmentsWithFilter(filters : FilterParams):Observable<AppointmentCardDto[]>{
    
    const apiurl : string = `https://localhost:44327/api/dashboard/appointments/filter`;
    return this.http.post<AppointmentCardDto[]>(apiurl, {body: filters});
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
    const apiurl : string ="https://localhost:44327/api/dashboard/statuscounts";
    return this.http.get<any>(apiurl);
  }
}
