import { Component } from '@angular/core';
import { Contacts } from '../contacts';
import { ContactsService } from '../contacts.service';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  ContactsList: Contacts[] = [];

  addingNewContact: boolean = false;

  newContact: Contacts= 
  {
    id: 0,
    user_name: '',
    contact_name: '',
    phone: '',
    email: '',
    address: '',
  }

  username = '';
  userLoggedIn:string = this.cookie.get('userID');

  constructor(private ConSrv:ContactsService, private UserSrv:UserService, private cookie: CookieService) {
    this.username = this.UserSrv.getUserID();
   }

  ngOnInit(): void {
    this.refresh()
    this.username = this.UserSrv.getUserID();
  }

  refresh(){
    this.userLoggedIn = this.cookie.get('userID');
    this.ConSrv.getAll((result:Contacts[])=>{
      this.ContactsList = [];
      for(let i = 0;i<result.length;i++){
        if(result[i].user_name === this.cookie.get('userID')){
          this.ContactsList.push(result[i])
        }
      }
    });
  };

  updateContact(con: Contacts) {
    this.ConSrv.Update(
      () => {
        this.refresh();
      },
      con
    );
  };

  deleteContact(id: number){
    this.ConSrv.Delete(
      () => {
        this.refresh()
      },
      id
    );
  };

  showForm(){
    this.addingNewContact = true;
  }

  addContact(){
    let newAddContact: Contacts = {
      id: 0,
      user_name: this.cookie.get('userID'),
      contact_name: this.newContact.contact_name,
      phone: this.newContact.phone,
      email: this.newContact.email,
      address: this.newContact.address
    };

    this.ConSrv.Add((result:any)=>{
      this.refresh();
      console.log(result);
      this.newContact.contact_name = '';
      this.newContact.phone = '';
      this.newContact.email = '';
      this.newContact.address = '';

    }, newAddContact
    )
    this.addingNewContact = false;
  }

  cancel(){
    this.addingNewContact = false;
  }
}
