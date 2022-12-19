import { Injectable } from '@angular/core';
import { Contacts } from './contacts';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService 
{
  userName:string = '';

  constructor(private http:HttpClient, private cookie: CookieService) 
  {
    console.log('Calling service')
    this.userName = cookie.get('userID');
    console.log(this.userName)
   }

   checkUserLogged():boolean{
    this.userName = this.cookie.get('userName');
    if(this.userName === ''){
      return false;
    }
    else{
      return true;
    }
  }

  setUserName(id:string){
    this.userName = id;
  }

  getUserName():string{
    return this.userName;
  }

  API_URL:string = 'https://localhost:7191/'; 

  getAll(cb: any)
  {
    this.http.get<Contacts>(`${this.API_URL}`+'contacts').subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Contacts>(`${this.API_URL}`+'contacts'+`/${id}`).subscribe(cb);
  }

  Add(cb: any, con: Contacts)
  {
    this.http.post<Contacts>(`${this.API_URL}`+'contacts', con).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Contacts>(`${this.API_URL}`+'contacts'+`/${id}`).subscribe(cb);
  }

  Update(cb: any, con: Contacts)
  {
    this.http.put<Contacts>(`${this.API_URL}`+'contacts', con).subscribe(cb);
  }
}
