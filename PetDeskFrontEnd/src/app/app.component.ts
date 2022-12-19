import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetDeskFrontEnd';

  isUserLogged:boolean = false;
  userIDFilled: string ='';
  // isAdmin:boolean = false;

  faCoffee = faCoffee;

  constructor(private UserSrv:UserService, private cookie:CookieService){
    this.checkuserID();
    this.userIDFilled = UserSrv.getUserID();
   }

  ngOnInit() {
    this.checkuserID();
    this.userIDFilled = this.UserSrv.getUserID();
  }

  checkuserID(){
    this.isUserLogged = this.UserSrv.checkUserLogged();
  }

  setUserID(){
    this.UserSrv.setUserID(this.userIDFilled);
    this.cookie.set('userID',`${this.userIDFilled}`)
    this.isUserLogged = true;  
  }

  userLogOut(){
    this.cookie.set('userID','');
    this.isUserLogged = this.UserSrv.checkUserLogged();
    this.userIDFilled = '';
  }  
}
