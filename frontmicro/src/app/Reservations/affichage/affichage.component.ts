import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationServiceService } from 'src/app/Services/reservation-service.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent {
  
  @Input() cin: number | null = null;
  reservations: any = []= [];
  constructor(private http: HttpClient  , private ac :ActivatedRoute ,private service:ReservationServiceService  ){
     };

     ngOnInit(){
  
      this.service.getReservations(this.cin).subscribe( res=>{this.reservations=res });
         
         
        }


  }


