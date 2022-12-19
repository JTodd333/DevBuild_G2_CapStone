import { Injectable } from '@angular/core';
import { Petrxview } from './petrxview';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetrxviewService {

  API_URL:string = 'https://localhost:7191/'; 

  getAll(cb: any)
  {
    this.http.get<Petrxview[]>(`${this.API_URL}`+'petrxview').subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Petrxview[]>(`${this.API_URL}`+'petrxview/pet'+`/${id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
