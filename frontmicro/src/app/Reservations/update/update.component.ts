import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationServiceService } from 'src/app/Services/reservation-service.service';
import { Router } from '@angular/router';
import { Observable ,of} from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

reserv: any = []= [];
newRequest2: {
  idReservation: string;
  annerUniversitaire: string;
  estValide: boolean;
} = {
  idReservation: '',
  estValide: false,
  annerUniversitaire: ''
};
@Input() id: string | null | undefined;
@Output() dataUpdated = new EventEmitter<void>();

constructor(private http: HttpClient, private servie:ReservationServiceService ,private modalService: NgbModal , private ac :ActivatedRoute,private router: Router,private cdr: ChangeDetectorRef){


}

ngOnInit(){



  // this.list = this.us1.getAllUsers()


 this.ac.paramMap.subscribe(res=>this.id=res.get('id'));
 console.log(this.id)
 }

  updateForm(id: any) {
    // Assurez-vous que la réservation à mettre à jour est définie
    if (!this.newRequest2) {
      console.error('Aucune réservation sélectionnée pour la mise à jour');
      return;
    }

    // Créez l'objet formData avec les valeurs de la réservation actuelle
    const formData = {
      idReservation: id,
      annerUniversitaire: this.newRequest2.annerUniversitaire,
      estValide: this.newRequest2.estValide,
    };

    // Appelez le service pour effectuer la mise à jour
    this.servie.UpdateData(formData).subscribe(
      (response) => {
        console.log('Mise à jour réussie', response);
        // Trouver l'index de l'élément à mettre à jour dans this.reserv
        const index = this.reserv.findIndex((res: { idReservation: any; }) => res.idReservation === id);
        // Mettez à jour seulement cet élément dans this.reserv
        this.reserv[index] = response;
        this.servie.getAllData().subscribe(
          (res) => {
            // Update your local data with the refreshed data
            this.reserv = res;

            // Navigate to the desired route after data refresh
            this.dataUpdated.emit();
            this.router.navigate(['/back']);
            this.cdr.detectChanges();

          },
          (error) => {
            console.error('Error refreshing data', error);
          }
        );
      },
      (error) => {
        console.error('Error updating data', error);
      }
    );
  }


  }





