import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PetComponent } from './pet-list/pet.component';
import { AppointmentComponent } from './appointment-list/appointment.component';
import { RxComponent } from './rx-list/rx.component'; 
//import { UserComponent } from './user-list/user.component';
import { VisitComponent } from './visit-list/visit.component';
import { ContactsComponent } from './contacts-list/contacts.component';
import { PetrxviewComponent } from './petrxview-list/petrxview.component';

const routes: Routes = [
  //{path: '', component:AppComponent},
  {path:'pet', component:PetComponent},
  {path:'appointment', component:AppointmentComponent},
  {path:'rx', component:RxComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'visit', component:VisitComponent},
  { path:'petrxview', component:PetrxviewComponent }
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
