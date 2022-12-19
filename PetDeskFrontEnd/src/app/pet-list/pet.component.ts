import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  PetList:Pet[] = [];

  addingNewPet:boolean = false;

  newPet: Pet =
  {
    id: 0,
    user_name: '',
    pet_name: "",
    species: "",
    breed: "",
    dob: "",
    pet_notes:"",
  }

  username='';
  userLoggedIn:string = this.cookie.get('userID');

  constructor(private PetSrv:PetService, private UserSrv:UserService, private cookie: CookieService) {
    this.username = this.UserSrv.getUserID();
   }

  ngOnInit(): void {
    this.refresh()
    this.username = this.UserSrv.getUserID();
  }

  refresh(){
    this.userLoggedIn = this.cookie.get('userID');
    this.PetSrv.getAll((result:Pet[])=>{
      this.PetList = [];
      for(let i = 0;i<result.length;i++){
        if(result[i].user_name === this.cookie.get('userID')){
          this.PetList.push(result[i])
        }
      }
    });
  };

  updatePet(pet: Pet) {
    this.PetSrv.Update(
      () => {
        this.refresh();
      },
      pet
    );
  };

  deletePet(id: number){
    this.PetSrv.Delete(
      () => {
        this.refresh()
      },
      id
    );
  };

  showForm(){
    this.addingNewPet = true;
  }

  addPet(){
    let newAddPet: Pet = {
      id: 0,
      user_name: this.cookie.get('userID'),
      pet_name: this.newPet.pet_name,
      species: this.newPet.species,
      breed: this.newPet.breed,
      dob: this.newPet.dob,
      pet_notes: this.newPet.pet_notes
    };

    this.PetSrv.Add((result:any)=>{
      this.refresh();
      console.log(result);
      this.newPet.pet_name = ''; 
      this.newPet.species = '';
      this.newPet.breed = '';
      this.newPet.dob = '';
      this.newPet.pet_notes = '';

    }, newAddPet)
    this.addingNewPet = false;
  }

  cancel(){
    this.addingNewPet = false;
  }
}
