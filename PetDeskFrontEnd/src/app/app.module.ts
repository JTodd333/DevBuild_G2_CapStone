import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VisitComponent } from './visit-list/visit.component';
//import { UserComponent } from './user-list/user.component';
import { RxComponent } from './rx-list/rx.component';
import { PetComponent } from './pet-list/pet.component';
import { AppointmentComponent } from './appointment-list/appointment.component';
import { ApptDetailComponent } from './appt-detail/appt-detail.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { RxDetailComponent } from './rx-detail/rx-detail.component';
//import { UserDetailComponent } from './user-detail/user-detail.component';
import { VisitDetailComponent } from './visit-detail/visit-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { PetrxviewComponent } from './petrxview-list/petrxview.component';
import { PetrxviewDetailComponent } from './petrxview-detail/petrxview-detail.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsComponent } from './contacts-list/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule }  from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    //UserComponent,
    RxComponent,
    PetComponent,
    AppointmentComponent,
    ApptDetailComponent,
    PetDetailComponent,
    RxDetailComponent,
    //UserDetailComponent,
    VisitDetailComponent,
    PetrxviewComponent,
    PetrxviewDetailComponent,
    ContactsDetailComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatOptionModule,
    MatSelectModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
