import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { DomElementSchemaRegistry, emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Visit } from '../visit';
import { VisitService } from '../visit.service';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css']
})
export class VisitDetailComponent {

  constructor(private VisitSrv: VisitService, private cookie:CookieService) {}

@Input() TheVisit: Visit =
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

// @Output() update: EventEmitter<Visit> = new EventEmitter<Visit>();
// @Output() delete: EventEmitter<number> = new EventEmitter<number>();

editVisit: Visit =
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

editMode: boolean = false;

// ngOnInit(): void {  
// }

// edit()
//   {
//     this.editMode = true;
//     this.editVisit.pet_id = this.TheVisit.pet_id;
//     this.editVisit.pet_name = this.TheVisit.pet_name;
//     this.editVisit.species = this.TheVisit.species;
//     this.editVisit.dob = this.TheVisit.dob;
//     this.editVisit.pet_notes = this.TheVisit.pet_notes;
//     this.editVisit.appt_date = this.TheVisit.appt_date;
//     this.editVisit.provider = this.TheVisit.provider;
//     this.editVisit.appt_notes = this.TheVisit.appt_notes;
//     this.editVisit.user_name = this.TheVisit.user_name;
//   }

//   refresh() 
//   {
//     this.VisitSrv.getAll((result:any)=>{
//       this.TheVisit = result;
//     });
//   };

//   cancel()
//   {
//     this.editMode = false;
//   }

//   saveChanges()
//   {
//     this.editVisit.pet_id = this.TheVisit.pet_id;
//     this.update.emit(this.editVisit);
//   }

//   deleteMe()
//   {
//     this.delete.emit(this.TheVisit.pet_id)
//   }
}   


