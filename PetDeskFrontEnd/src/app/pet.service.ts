import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PetService 
{

  API_URL:string = 'https://localhost:7191/'; 

  getAll(cb: any)
  {
    this.http.get<Pet>(`${this.API_URL}`+'pet').subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Pet>(`${this.API_URL}`+'pet'+`/${id}`).subscribe(cb);
  }

  Add(cb: any, pt: Pet)
  {
    this.http.post<Pet>(`${this.API_URL}`+'pet', pt).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Pet>(`${this.API_URL}`+'pet'+`/${id}`).subscribe(cb);
  }

  Update(cb: any, pt: Pet)
  {
    this.http.put<Pet>(`${this.API_URL}`+'pet', pt).subscribe(cb);
  }

  constructor(private http:HttpClient, private cookie: CookieService) { }  
}
