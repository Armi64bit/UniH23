import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservationServiceService } from 'src/app/Services/reservation-service.service';

@Component({
  selector: 'app-reservationfront',
  templateUrl: './reservationfront.component.html',
  styleUrls: ['./reservationfront.component.css']
})
export class ReservationfrontComponent {
   idR: String="";
   reserv: any = []= [];
   leschambres: any[] = [];
   selectedNumeroChambre: number | null = null;
   cin2: number | null = null;
  newRequest3: {
    annerUniversitaire: string;
    estValide: boolean;
    numeroChambre: number; // Ajoutez la déclaration de numeroChambre ici
  } = { annerUniversitaire: '', estValide: false, numeroChambre: 0 }; // Initialisez numeroChambre

  constructor(private http: HttpClient  , private ac :ActivatedRoute ,private service:ReservationServiceService ,private modalService: NgbModal ){
    this.newRequest3 = { annerUniversitaire: '', estValide: false , numeroChambre: 0  };

  }

  ngOnInit(){

    this.service.getAllData().subscribe( res=>{this.reserv=res


        });

        this.service.getChambres().subscribe(res => this.leschambres = res);
      }



  submitForm() {
    console.log("------");

    // Récupérer la dernière ID de la liste des réservations
    let myString = this.reserv[this.reserv.length - 1].idReservation;

    // Extraire la partie numérique de l'ID
    let numericPart = myString.match(/\d+/); // Cette expression régulière récupère la partie numérique de l'ID

    if (numericPart) {
      // Incrémenter la partie numérique
      let incrementedNumeric = (parseInt(numericPart[0], 10) + 1).toString();

      // Ajouter des zéros à gauche pour maintenir la longueur
      incrementedNumeric = incrementedNumeric.padStart(numericPart[0].length, '0');

      // Remplacer la partie numérique dans la chaîne d'origine
      let modifiedString = myString.replace(/\d+/, incrementedNumeric);

      console.log(modifiedString);

      // Créer l'objet formData avec l'ID modifiée
      const formData = {
        reservation: {  // Utilisez le nom de champ 'reservation'
          idReservation: modifiedString,
          annerUniversitaire: this.newRequest3.annerUniversitaire,
          estValide: this.newRequest3.estValide,
        },
        numeroChambre: this.selectedNumeroChambre,
      };


      this.service.AddData2(formData).subscribe(
        (response: any) => {
          console.log('Demande enregistrée avec succès', response);

          // Vérifier si la réponse a des données et si elle a une propriété "idReservation"
          if (response && response.idReservation) {
            // Extraire les propriétés de la réponse
            const newReservation = {
              idReservation: response.idReservation,
              annerUniversitaire: response.annerUniversitaire,
              estValide: response.estValide
            };


            // Réinitialiser les valeurs du formulaire après l'envoi
            this.newRequest3 = {
              annerUniversitaire: '',
              estValide: true,
              numeroChambre: 0
            };
            console.log('Nouvelle demande après réinitialisation:', this.newRequest3);
            const modalRef = this.modalService.open("Votre Réservation a été ajoutée avec succès", { windowClass: 'custom-modal-size' });

            // Utilisation de setTimeout pour fermer le modal après 6000 millisecondes (6 secondes)
            setTimeout(() => {
              modalRef.close();  // Utilisez modalRef.close() pour fermer le modal
            }, 3000);


          } else {
            alert('Une erreur s\'est produite. Veuillez réessayer.');
            console.error('Erreur lors de l\'ajout. Réponse inattendue:', response);
          }
        },
        (error) => {
          console.error('Une erreur s\'est produite', error);

          // Vérifier si la réponse est une erreur BAD_REQUEST
          if (error.status === 400) {
            // Gérer l'erreur BAD_REQUEST ici, par exemple afficher un message à l'utilisateur
            console.log('Erreur BAD_REQUEST:', error.error);
          }
        }
      );


    } else {
      console.error("La partie numérique de l'ID n'a pas été trouvée");
    }
  }

  onOkButtonClick() {
    // Assurez-vous que cin2 est correctement défini
    if (this.cin2) {
      console.log('CIN sélectionné:', this.cin2);
    } else {
      // Gérez le cas où le CIN est vide ou invalide
      console.error('CIN invalide');
    }
  }
}
