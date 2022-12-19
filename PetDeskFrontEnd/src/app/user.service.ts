
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userID:string = '';

  constructor(private cookie:CookieService) {
    console.log('Calling service')
    this.userID = cookie.get('userID');
    console.log(this.userID)
   }

   checkUserLogged():boolean{
    this.userID = this.cookie.get('userID');
    if(this.userID === ''){
      return false;
    }
    else{
      return true;
    }
  }

  setUserID(id:string){
    this.userID = id;
  }

  getUserID():string{
    return this.userID;
  }

  // API_URL:string = 'https://localhost:7179/'; 

  
  //  getAll(cb: any)
  //   {
  //     this.http.get<User>(`${this.API_URL}`+'user').subscribe(cb);
  //   } 
    
  //   getOne(cb: any, id: any)
  //   {
  //     this.http.get<User>(`${this.API_URL}`+'user'+`/${id}`).subscribe(cb);
  //   }
  
  //   Add(cb: any, ur: User)
  //   {
  //     this.http.post<User>(`${this.API_URL}`+'user', ur).subscribe(cb);
  //   }
  
  //   Delete(cb: any, id: any)
  //   {
  //     this.http.delete<User>(`${this.API_URL}`+'user'+`/${id}`).subscribe(cb);
  //   }
  
  //   Update(cb: any, ur: User)
  //   {
  //     this.http.put<User>(`${this.API_URL}`+'user', ur).subscribe(cb);
  //   }
  }

  