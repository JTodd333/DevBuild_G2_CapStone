import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contacts } from '../contacts';
import { CookieService } from 'ngx-cookie-service';
import { ContactsService } from '../contacts.service';
import { faPhone, faHouseUser, faEnvelope  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit 
{

  @Input() theContact: Contacts = 
  {
    id: 0,
    user_name: '',
    contact_name: '',
    phone: '',
    email: '',
    address: '',
  };

  @Output() update:EventEmitter<Contacts> = new EventEmitter<Contacts>();
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHouseUser = faHouseUser;

  editContact: Contacts= 
  {
    id: 0,
    user_name: '',
    contact_name: '',
    phone: '',
    email: '',
    address: '',
  }

  editMode: boolean = false;

  username='';
  userLoggedIn:string = this.cookie.get('userID');

  constructor(private cookie:CookieService, private ConSrv:ContactsService) { }

  ngOnInit(): void {
  }

  turnOnEdit(){
    //this.editContact.id = this.theContact.id;
    this.editContact.user_name = this.cookie.get('userID');
    this.editContact.contact_name = this.theContact.contact_name;
    this.editContact.phone = this.theContact.phone;
    this.editContact.email = this.theContact.email;
    this.editContact.address = this.theContact.address;
    this.editMode = true;
  }

  cancel(){
    this.editMode = false;
  }

  saveChanges(){
    this.editContact.id = this.theContact.id;
    this.update.emit(this.editContact);
  }

  deleteMe(){
    this.delete.emit(this.theContact.id);
  }

}
