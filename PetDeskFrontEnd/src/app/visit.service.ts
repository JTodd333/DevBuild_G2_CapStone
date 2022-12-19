import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visit } from './visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService 
{

  API_URL:string = 'https://localhost:7191/'; 

  getAll(cb: any)
  {
    this.http.get<Visit[]>(`${this.API_URL}`+'visit').subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Visit[]>(`${this.API_URL}`+'visit/pet'+`/${id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }

  // Add(cb: any, vt: Visit)
  // {
  //   this.http.post<Visit>(`${this.API_URL}`+'visit', vt).subscribe(cb);
  // }

  // Delete(cb: any, id: any)
  // {
  //   this.http.delete<Visit>(`${this.API_URL}`+'visit'+`/${id}`).subscribe(cb);
  // }

  // Update(cb: any, vt: Visit)
  // {
  //   this.http.put<Visit>(`${this.API_URL}`+'visit', vt).subscribe(cb);
  // }

  // SearchByUserName(cb: any, name: string) {
	// 	this.http.get<Visit[]>(`${this.API_URL}`+'visit/searchbyusername' +`/${name}`).subscribe(cb);
	// } 


  
  
}