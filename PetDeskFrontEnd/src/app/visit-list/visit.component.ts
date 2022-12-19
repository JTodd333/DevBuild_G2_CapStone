import { Component} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';
import { Visit } from '../visit';
import { VisitService } from '../visit.service';
import { ContactsService } from '../contacts.service';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent {

  username ='';
  userLoggedIn: string = this.cookie.get('userID');

  VisitList: Visit[] = [];

  newVisit: Visit = 
  {
    pet_id: 0,
    appt_id: 0,
    pet_name: "",
    species: "",
    dob: "",
    pet_notes: "",
    appt_date: "",
    provider: "",
    appt_notes: "",
    user_name: ''
  }

  // searchName: string = '';
  showAll: boolean = false;
  

constructor(private VisitSrv: VisitService, private ApptSrv: AppointmentService, private UserSrv:UserService, private cookie:CookieService) 
{ 
    this.username = this.UserSrv.getUserID();
   // this.username = this.ContactsSrv.getUserName();
}   
    ngOnInit(): void 
    { 
      this.refresh()
      this.username = this.UserSrv.getUserID();
    }

    refresh() 
    {
      this.userLoggedIn = this.cookie.get('userID');
      this.VisitSrv.getAll(( result: Visit[]) => {
        this.VisitList = [];
          for (let i = 0; i < result.length; i++)
          {
            if (result[i].user_name === this.cookie.get('userID'))
            {
              this.VisitList.push(result[i])
            }
          }
      });
    };

    // save(visit: Visit)
    // {
    //   this.VisitSrv.Add((result: Visit) => {
    //     this.refresh();}, visit);
    // }

    // openVisit(id: number)
    // {
    //   this.VisitSrv.getOne((result: Visit) =>{
    //     this.newVisit = result;},id);
    // }

    // update(visit: Visit)
    // {
    //   this.VisitSrv.Update(() =>{
    //     this.refresh();}, visit);
    // }

    // search()
    // {
    //   if(this.searchName != '')
    //   {
    //     this.VisitSrv.SearchByUserName((result: Visit[]) => {
    //       this.VisitList = result;},
    //       this.searchName.trim().toLowerCase());
    //   }
    // }

    // clear()
    // {
    //   this.searchName = '';
    //   this.refresh();
    // }
}

  

  

