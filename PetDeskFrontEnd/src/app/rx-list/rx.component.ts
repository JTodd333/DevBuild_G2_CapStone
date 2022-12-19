import { Component, OnInit } from '@angular/core';
import { Rx } from '../rx';
import { RxService } from '../rx.service';
import { UserService } from '../user.service';
import { PetService } from '../pet.service';
import { CookieService } from 'ngx-cookie-service';
import { Pet } from '../pet';
import { Petrxview } from '../petrxview';
import { PetrxviewService } from '../petrxview.service';
import { faDog, faCat, faPrescriptionBottleMedical} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {


  constructor(private RxSrv:RxService, private PetSrv:PetService, private UserSrv:UserService, 
    private cookie: CookieService, private PetRxSrv: PetrxviewService) {
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

  ngOnInit(): void {
    this.refresh();
    this.username = this.UserSrv.getUserID();
  }

  faDog = faDog;
  faCat = faCat;
  faRx = faPrescriptionBottleMedical;

  username='';
  userLoggedIn:string = this.cookie.get('userID');

  RxList: Rx[] = [];
  PetRxList: Petrxview[] = [];
  PetList: Pet[] = [];

  addingNewRx: boolean = false;

  newRx: Rx = {
    id: 0,
    pet_id: 0,
    pet_name: '',
    rx_name: '',
    rx_reminder: '',
    rx_notes: '',
  }

  editRx: Rx = {
    id: 0,
    pet_id: 0,
    pet_name: '',
    rx_name: '',
    rx_reminder: '',
    rx_notes: '',
  }


  refresh(){
    this.userLoggedIn = this.cookie.get('userID');
    this.PetRxSrv.getAll((result: Petrxview[])=>{
      this.PetRxList = [];
      for(let i = 0;i<result.length;i++){
        if(result[i].user_name === this.cookie.get('userID')){
          this.PetRxList.push(result[i])
        }
      }
    });
    //return this.PetRxList;
  };

  showForm(){
    this.addingNewRx = true;
  }

  openRx(id: number) {
    this.refresh();
		this.RxSrv.getOne(
			(result: Rx) => {
				this.editRx = result;
			},
			id
		);
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
  
  deleteRx(id: number){
    this.RxSrv.Delete(
      () => {
        this.refresh()
      },
      id
    );
  };

  updateRx(rx: Rx) {
    this.RxSrv.Update(
      () => {
        this.refresh();
      },
      rx
    );
  };


  addRx(){
    let newAddRx: Rx = {
      id: 0,
      pet_id: this.newRx.pet_id,   //this.PetIdbyName2(this.searchName),
      pet_name: this.GetPetNameByID(this.newRx.pet_id),
      rx_name: this.newRx.rx_name,
      rx_reminder: this.newRx.rx_reminder,
      rx_notes: this.newRx.rx_notes,
    };

    this.RxSrv.Add((result:any)=>{
      this.refresh();
      console.log(result);
      this.newRx.pet_id = 0;
      //this.searchName = '',
      this.newRx.rx_name = '';
      this.newRx.rx_reminder = '';
      this.newRx.rx_notes = ''

    }, newAddRx)
    this.addingNewRx = false;
  }

  cancel(){
    this.addingNewRx = false;
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

}



