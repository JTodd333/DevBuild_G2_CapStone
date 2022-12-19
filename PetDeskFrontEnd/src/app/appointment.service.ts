import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Visit } from './visit';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  API_URL:string = 'https://localhost:7191/'; 

  getAll(cb: any)
  {
    this.http.get<Appointment>(`${this.API_URL}`+'appointment').subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Appointment>(`${this.API_URL}`+'appointment'+`/${id}`).subscribe(cb);
  }

  Add(cb: any, ap: Appointment)
  {
    this.http.post<Appointment>(`${this.API_URL}`+'appointment', ap).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Appointment>(`${this.API_URL}`+'appointment'+`/${id}`).subscribe(cb);
  }

  Update(cb: any, ap: Appointment)
  {
    this.http.put<Appointment>(`${this.API_URL}`+'appointment', ap).subscribe(cb);
  }

  VisitList ( cb:any ){
    this.http.get<Visit[]>(`${this.API_URL}`+'visit').subscribe(cb);
  }

  constructor(private http:HttpClient) { }  
}
