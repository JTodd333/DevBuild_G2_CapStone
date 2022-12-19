import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Petrxview } from '../petrxview';
import { PetrxviewService } from '../petrxview.service';
import { RxService } from '../rx.service';

@Component({
  selector: 'app-petrxview-detail',
  templateUrl: './petrxview-detail.component.html',
  styleUrls: ['./petrxview-detail.component.css']
})
export class PetrxviewDetailComponent {

  constructor(private cookie:CookieService, private RxSrv:RxService, private PetRxSrv: PetrxviewService ) { }

  @Input() thePetRx: Petrxview = 
  {
    pet_id: 0,
    user_name: '',
    pet_name: '',
    species: '',
    dob: '',
    rx_id: 0,
    rx_name: '',
    rx_reminder: '',
    rx_notes: ''
  }

  editRx: Petrxview = {
    pet_id: 0,
    user_name: '',
    pet_name: '',
    species: '',
    dob: '',
    rx_id: 0,
    rx_name: '',
    rx_reminder: '',
    rx_notes: ''
   };

}
