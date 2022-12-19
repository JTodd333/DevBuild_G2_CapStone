import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rx } from '../rx';
import { CookieService } from 'ngx-cookie-service';
import { RxService } from '../rx.service';
import { InvokeFunctionExpr } from '@angular/compiler';
import { RxComponent } from '../rx-list/rx.component';


@Component({
  selector: 'app-rx-detail',
  templateUrl: './rx-detail.component.html',
  styleUrls: ['./rx-detail.component.css']
})

export class RxDetailComponent implements OnInit 
{

   @Input() theRx: Rx = 
   {
    id: 0,
    pet_id: 0,
    pet_name: '',
    rx_name: "",
    rx_reminder: "",
    rx_notes: "",
   };

  @Output() updateEdit:EventEmitter<Rx> = new EventEmitter<Rx>();
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();
  @Output("refresh") refresh: EventEmitter<any> = new EventEmitter();

  @Input() editRx: Rx = {
    id: 0,
    pet_id: 0,
    pet_name: "",
    rx_name: "",
    rx_reminder: "",
    rx_notes: ""
   };

  editMode:boolean = true;

  constructor(private cookie:CookieService, private RxSrv:RxService ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.editMode = false;
    this.refresh.emit();
    window.location.reload();
  }

  saveChanges(){
    //this.editRx.id = this.theRx.id;
    this.updateEdit.emit(this.editRx);
    this.refresh.emit();
    this.cancel();

  }

  deleteMe(){
    this.delete.emit(this.editRx.id);
    this.cancel();
  }
}
