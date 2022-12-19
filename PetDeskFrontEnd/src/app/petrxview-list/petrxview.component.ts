import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PetService } from '../pet.service';
import { Petrxview } from '../petrxview';
import { PetrxviewService } from '../petrxview.service';
import { RxService } from '../rx.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-petrxview',
  templateUrl: './petrxview.component.html',
  styleUrls: ['./petrxview.component.css']
})
export class PetrxviewComponent {

  username='';
  userLoggedIn:string = this.cookie.get('userID');

  PetRxList: Petrxview[] = [];

  constructor(private RxSrv:RxService, private PetRxSrv:PetrxviewService, private UserSrv:UserService, private cookie: CookieService) {
    this.username = this.UserSrv.getUserID();
   }

   ngOnInit(): void {
    this.refresh();
    this.username = this.UserSrv.getUserID();
  }


  refresh(){
    this.userLoggedIn = this.cookie.get('userID');
    this.PetRxSrv.getAll((result:Petrxview[])=>{
      this.PetRxList = [];
      for(let i = 0;i<result.length;i++){
        if(result[i].user_name === this.cookie.get('userID')){
          this.PetRxList.push(result[i])
        }
      }
    });
  };

  



}
