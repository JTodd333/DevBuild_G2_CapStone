import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet';
import { CookieService } from 'ngx-cookie-service';
import { PetService } from '../pet.service';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit 
{
  @Input() thePet: Pet =
  {
    id: 0,
    user_name: '',
    pet_name: "",
    species: "",
    breed: "",
    dob: "",
    pet_notes:"",
  };

  @Output() update:EventEmitter<Pet> = new EventEmitter<Pet>();
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();

  editPet: Pet = {
    id: 0,
    user_name: '',
    pet_name: "",
    species: "",
    breed: "",
    dob: "",
    pet_notes:"",
  };

  editMode:boolean = false;

  username='';
  userLoggedIn:string = this.cookie.get('userID');

  constructor(private cookie:CookieService, private PetSrv:PetService) { }

  ngOnInit(): void {
  }

  faDog = faDog;
  faCat = faCat;

  turnOnEdit(){
    this.editPet.user_name = this.cookie.get('userID');
    this.editPet.pet_name = this.thePet.pet_name;
    this.editPet.species = this.thePet.species;
    this.editPet.breed = this.thePet.breed;
    this.editPet.dob = this.thePet.dob;
    this.editPet.pet_notes = this.thePet.pet_notes;
    this.editMode = true;
  }

  cancel(){
    this.editMode = false;
  }

  saveChanges(){
    this.editPet.id = this.thePet.id;
    this.update.emit(this.editPet);
  }

  deleteMe(){
    this.delete.emit(this.thePet.id);
  }
}
