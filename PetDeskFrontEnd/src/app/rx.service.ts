import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Petrxview } from './petrxview';
import { Rx } from './rx';

@Injectable({
  providedIn: 'root'
})
export class RxService 
{

  API_URL:string = 'https://localhost:7191/'; 

  getAll(cb: any)
  {
    this.http.get<Rx>(`${this.API_URL}`+'rx').subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Rx>(`${this.API_URL}`+'rx'+`/${id}`).subscribe(cb);
  }

  Add(cb: any, rx: Rx)
  {
    this.http.post<Rx>(`${this.API_URL}`+'rx', rx).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Rx>(`${this.API_URL}`+'rx'+`/${id}`).subscribe(cb);
  }

  Update(cb: any, rx: Rx)
  {
    this.http.put<Rx>(`${this.API_URL}`+'rx', rx).subscribe(cb);
  }

  PetRxViewList ( cb:any ){
    this.http.get<Petrxview[]>(`${this.API_URL}`+'petrxview').subscribe(cb);
  }
  
  constructor(private http:HttpClient) { } 
}
