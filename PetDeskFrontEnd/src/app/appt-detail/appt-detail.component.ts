import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appt-detail',
  templateUrl: './appt-detail.component.html',
  styleUrls: ['./appt-detail.component.css']
})

export class ApptDetailComponent implements OnInit 
{
  @Input() theAppt: Appointment =
  {
    id: 0,
    pet_id: 0,
    pet_name: '',
    appt_date: '',
    provider: '',
    appt_notes: '',
  };


  @Output() updateEdit:EventEmitter<Appointment> = new EventEmitter<Appointment>();
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();
  @Output("refresh") refresh: EventEmitter<any> = new EventEmitter();
  
  @Input() editAppt: Appointment =
  {
    id: 0,
    pet_id: 0,
    pet_name: '',
    appt_date: '',
    provider: '',
    appt_notes: ''
  };

  editMode: boolean = true;

  constructor(private ApptSrv: AppointmentService, private cookie:CookieService) { }

  ngOnInit(): void {
  }

  cancel(){
    this.editMode = false;
    this.refresh.emit();
    window.location.reload();
  }

  saveChanges(){
    this.updateEdit.emit(this.editAppt);
    this.refresh.emit();
    this.cancel();
  }

  deleteMe(){
    this.delete.emit(this.editAppt.id);
    this.cancel();
  }
}