import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Pet } from '../pet';
import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Visit } from '../visit';
import { VisitService } from '../visit.service';
import { CookieService } from 'ngx-cookie-service';
import { PetService } from '../pet.service';
import { UserService } from '../user.service';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-appt',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit 
{

  username = '';
  userLoggedIn:string = this.cookie.get('userID');

  constructor(private ApptSrv: AppointmentService, private VisitSrv:VisitService, private PetSrv:PetService, private UserSrv:UserService, private cookie: CookieService) 
  { 
    this.username = this.UserSrv.getUserID();
    this.PetSrv.getAll((result: Pet[])=>{
      this.PetList = [];
      for(let i = 0;i<result.length;i++){
        if(result[i].user_name === this.cookie.get('userID')){
          this.PetList.push(result[i])
        }
      }
    });
  }
  
  ngOnInit(): void 
  {
    this.refresh();
    this.username = this.UserSrv.getUserID();
  }
  
  ApptList: Appointment[] = [];
  PetList: Pet[] = [];
  VisitList: Visit[] = [];

  faDog = faDog;
  faCat = faCat;

  addingNewAppt: boolean = false;

  newAppt: Appointment =
  {
    id: 0,
    pet_id: 0,
    pet_name: '',
    appt_date: '',
    provider: '',
    appt_notes: ''
  }

  editAppt: Appointment =
  {
    id: 0,
    pet_id: 0,
    pet_name: '',
    appt_date: '',
    provider: '',
    appt_notes: ''
  }


  refresh()
  {
    this.userLoggedIn = this.cookie.get('userID');
      this.VisitSrv.getAll(( result: Visit[]) => 
      {
        this.VisitList = [];
          for (let i = 0; i < result.length; i++)
          {
            if (result[i].user_name === this.cookie.get('userID'))
            {
              this.VisitList.push(result[i])
            }
          }
      });
      //return this.VisitList;
  }

  showForm(){
    this.addingNewAppt = true;
  }

  // GetUserPetList(){
  //   this.userLoggedIn = this.cookie.get('userID');
  //   this.PetSrv.getAll((result:Pet[])=>{
  //     this.PetList = [];
  //     for(let i = 0;i<result.length;i++){
  //       if(result[i].user_name === this.cookie.get('userID')){
  //         this.PetList.push(result[i])
  //       }
  //     }
      
  //   });
  //   return this.PetList;
  // };

  message:string = "Error, pet name not found";

  GetPetNameByID(pet_id: number){
    this.PetList; //= this.GetUserPetList();
    for (let i=0; i < this.PetList.length; i++){
      if (this.PetList[i].id == pet_id){
        return this.PetList[i].pet_name;
      }
    }
    return this.message;
  }

  // searchName: string = '';

  // PetIdbyName2(pname: string) {
  //   if(pname != '')
  //   {
  //     this.PetList = this.GetUserPetList();
  //     console.log(this.PetList);
  //     for (let i = 0; i < this.PetList.length; i++)
  //     {
  //       if (this.PetList[i].pet_name.trim().toLowerCase() === pname.trim().toLowerCase()){
  //         return this.PetList[i].id;
  //       }
  //       return this.PetList.length;  //this line just a test
        
  //     }
  //   }
  //   return this.PetList.length;  //this line just a test
  // }

  openAppt(id: number) 
  {
    //this.refresh();
		this.ApptSrv.getOne((result: Appointment) => {
				this.editAppt = result;},id);
	}



  deleteOne(id: number)
  {
    this.ApptSrv.Delete( ()=>{
      this.refresh()}, id);
  }

  updateOne (appt:Appointment)
  {
    this.ApptSrv.Update(()=>{
      this.refresh()},appt)
  }

  addAppt(){
    let newAddAppt: Appointment = 
    {
      id: 0,
      pet_id: this.newAppt.pet_id,    //this.PetIdbyName2(this.searchName),
      pet_name: this.GetPetNameByID(this.newAppt.pet_id),
      appt_date: this.newAppt.appt_date,
      provider: this.newAppt.provider,
      appt_notes: this.newAppt.appt_notes,
    };

    this.ApptSrv.Add((result:any)=>{
      this.refresh();
      console.log(result);
      this.newAppt.pet_id = 0;
      this.newAppt.appt_date = '';
      this.newAppt.provider = '';
      this.newAppt.appt_notes = '';

    }, newAddAppt)
    this.addingNewAppt = false;
  }

  cancel(){
    this.addingNewAppt = false;
  }

}