import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Observable, catchError, firstValueFrom, forkJoin, map, of, tap } from 'rxjs';
import { ReservationServiceService } from 'src/app/Services/reservation-service.service';




@Component({
  selector: 'app-reservationback',
  templateUrl: './reservationback.component.html',
  styleUrls: ['./reservationback.component.css']
})
export class ReservationbackComponent {
showchOptions: any;
showEtudiantsOptions: any;
togglech() {
throw new Error('Method not implemented.');
}
  currentId : any ;
  num: any;
  id:any;
  reserv: any = []= [];
  etudiant: any = [];
  chambre: any
  idReservation: any =""
  chambres: any[] = [];
  Allchambres: any[] = [];
  selectedNumeroChambre: number | null = null;
  closeResult: string = '';

  newRequest: {
    annerUniversitaire: string;
    estValide: boolean;
    numeroChambre: number; // Ajoutez la déclaration de numeroChambre ici
  } = { annerUniversitaire: '', estValide: false, numeroChambre: 0 }; // Initialisez numeroChambre

    // registerForm: FormGroup;

    newRequest2: {
      idReservation: string;
      annerUniversitaire: string;
      estValide: boolean;
    } = {
      idReservation: this.reserv.idReservation,
      estValide: false,
      annerUniversitaire: ''
    };




    submitted = false;
    visible = true;
    test(error: any){
      console.log(error)
    }


  open(content:any) {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false, // Disable closing on pressing the escape key
      centered: true, // Optionally center the modal
      windowClass: 'modal-custom-class', // Optionally add a custom class to the modal window
      // ... other options
    };

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.modalService.open(this.modalService, { backdrop: false });
  }

  refreshData() {
    // Logic to refresh your data
    // For example:
    this.servie.getAllData().subscribe(
      (res) => {
        this.reserv = res;
      },
      (error) => {
        console.error('Error refreshing data', error);
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  constructor(private http: HttpClient, private servie:ReservationServiceService ,private modalService: NgbModal , private ac :ActivatedRoute){
    this.newRequest = { annerUniversitaire: '', estValide: false , numeroChambre: 0  };

  }

 ngOnInit(){
  console.log("imbackkkk")
  this.servie.getAllData().subscribe( res=>{this.reserv=res

    this.returnChambre()

      });

      this.servie.getChambres().subscribe(res => this.Allchambres = res);

      this.ac.paramMap.subscribe((params) => {
        this.id = params.get('id');
        this.refreshData();
      });
    }




  getEtudiant(){
    this.servie.getEtudiant(this.reserv.idReservation).subscribe(res=>this.etudiant=res);
  }


// Fonction pour obtenir les informations sur la chambre
getChambreInfo(idReservation: any): string {
  const chambre = this.chambres.find(ch => ch.idReservation === idReservation);
  this.servie.getChambre(idReservation);
  return chambre;
}




// ReservationbackComponent

open5(mymodalUpdate: any, idReservation: string): void {
  const modalOptions: NgbModalOptions = {
    backdrop: 'static', // This makes the backdrop non-clickable and non-closable
    // other options...
  };
  // Trouver la réservation par son id
  const reservationToUpdate = this.reserv.find((res: { idReservation: string; }) => res.idReservation === idReservation);

  // Assurez-vous que la réservation à mettre à jour est trouvée
  if (reservationToUpdate) {
    // Mettre à jour les autres propriétés de la réservation
    this.newRequest2 = {
      idReservation: reservationToUpdate.idReservation,
      annerUniversitaire: reservationToUpdate.annerUniversitaire,
      estValide: reservationToUpdate.estValide,
    };

    // Ouvrir le modal
    this.modalService.open(mymodalUpdate, { ariaLabelledBy: 'modal-basic-title' });
  } else {
    console.error('Aucune réservation trouvée avec cet id.');
  }
}





  open2(content: any, idReservation: any): void {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // This makes the backdrop non-clickable and non-closable
      // other options...
    };
    this.servie.getEtudiant(idReservation).subscribe(res=>this.etudiant=res);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  open3(content: any, idReservation: any): void {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // This makes the backdrop non-clickable and non-closable
      // other options...
    };
    this.servie.getChambre(idReservation).subscribe(res => {
      this.chambre = res; // Assurez-vous que le résultat de la requête est stocké dans this.chambre
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    });
  }
  async returnChambre(): Promise<void>{
    const chambrePromises: Promise<any>[] = [];
    for (let i =0;i < this.reserv.length;i++){
      try {

      console.log(this.reserv)
      //console.log(this.reserv[i].idReservation)
      const chambre1 = await firstValueFrom(this.servie.getChambre(this.reserv[i].idReservation));

      console.log(this.reserv[i].idReservation)
      this.chambres.push(chambre1.numeroChambre)
      console.log(chambre1)
    } catch (error) {
      console.error('Error fetching chambre:', error);
    }

    //  return res// Assurez-vous que le résultat de la requête est stocké dans this.chambre

  };



  }
  handleReservationAdded() {
    // Récupérer la dernière ID de la liste des réservations
    let myString = this.reserv[this.reserv.length - 1].idReservation;

    // Extraire la partie numérique de l'ID
    let numericPart = myString.match(/\d+/);

    if (numericPart) {
      // Incrémenter la partie numérique
      let incrementedNumeric = (parseInt(numericPart[0], 10) + 1).toString();

      // Ajouter des zéros à gauche pour maintenir la longueur
      incrementedNumeric = incrementedNumeric.padStart(numericPart[0].length, '0');

      // Remplacer la partie numérique dans la chaîne d'origine
      let modifiedString = myString.replace(/\d+/, incrementedNumeric);

      // Faites quelque chose avec l'ID généré dans le composant parent
      console.log('ID généré dans le composant parent:', modifiedString);

      // Utilisez l'ID généré comme vous le souhaitez
      // Par exemple, vous pouvez le stocker dans une variable, le passer à un service, etc.
      this.currentId = modifiedString;
    } else {
      console.error("La partie numérique de l'ID n'a pas été trouvée");
    }
  }


  submitForm2() {
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
          annerUniversitaire: this.newRequest.annerUniversitaire,
          estValide: this.newRequest.estValide,
        },
        numeroChambre: this.selectedNumeroChambre,
      };


      // Appeler le service pour ajouter les données
      this.servie.AddData2(formData).subscribe(
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

            // Ajouter la nouvelle réservation à votre tableau
            this.reserv.push(newReservation);
            this.chambres.push(this.selectedNumeroChambre);

            // Réinitialiser les valeurs du formulaire après l'envoi
            this.newRequest = {
              annerUniversitaire: '',
              estValide: true,
              numeroChambre: 0
            };
            console.log('Nouvelle demande après réinitialisation:', this.newRequest);
            this.modalService.dismissAll();
          } else {
            this.modalService.open( alert('Une erreur s\'est produite. Veuillez réessayer.'));
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
        // Fermez le modal
        this.modalService.dismissAll();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la mise à jour', error);
        // Gérez les erreurs ici
      }
    );
  }


  open4(content: any, id: any): void {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // This makes the backdrop non-clickable and non-closable
      // other options...
    };
    this.servie.getEtudiants().subscribe(res => this.etudiant = res);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  etudiantSelectionneId: string = '';
  chambreSelectionneId: string = '';

  recupererIdEtudiant(etudiant: any, event: any) {
    // Si la case à cocher est cochée, affectez l'ID de l'étudiant sélectionné
    if (event.target.checked) {
      this.etudiantSelectionneId = etudiant.idEtudiant;
    } else {
      // Si la case à cocher est décochée, réinitialisez l'ID de l'étudiant sélectionné
      this.etudiantSelectionneId = '';
    }
  }

  recupererIdChambre(chambre: any, event: any) {
    // Si la case à cocher est cochée, affectez l'ID de l'étudiant sélectionné
      if (event.target.checked) {
      this.chambreSelectionneId = chambre.idChambre;
    } else {
      // Si la case à cocher est décochée, réinitialisez l'ID de l'étudiant sélectionné
      this.chambreSelectionneId = '';
    }
  }

  affecterEtudiantAReservation(idReservation: string): void {
    if (this.etudiantSelectionneId) {
      this.servie.affectStudentToReservation(idReservation, this.etudiantSelectionneId).subscribe(
        () => {
          console.log('Affectation réussie');

          // Vous pouvez ajouter ici des actions supplémentaires après l'affectation réussie si nécessaire
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'affectation', error);
          // Gérez les erreurs ici si nécessaire
        }
      );
    } else {
      console.warn('Aucun étudiant sélectionné');
    }


  }


    deleteRes2(idChambre: any, idReservation: any ): void {
      const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?');

      if (confirmation) {
        // Ajoutez la logique pour obtenir l'idChambre à partir du numéro de chambre (idChambre doit être un nombre)


        if (idChambre!== null ) {
          this.servie.delete(idChambre, idReservation).subscribe(
            () => {
              console.log('Suppression réussie');
              // Vous pouvez ajouter ici des actions supplémentaires après la suppression réussie si nécessaire
              alert('Réservation supprimée avec succès.');
            }
            ,
            (error) => {
              console.error('Une erreur s\'est produite lors de la suppression', error);
              // Gérez les erreurs ici si nécessaire
              alert('Une erreur s\'est produite lors de la suppression de la réservation.');
            }
          );
        } else {
          console.error('Impossible de trouver l\'idChambre correspondant au numéro de chambre.');
        }

      }
    }


    delete(pos:number) {
      this.reserv.splice(pos,1);
    }

  // Dans votre composant
deleteResAndDelete(index: number, chambre: any, idReservation: number) {
  this.deleteRes2(chambre, idReservation);
  this.delete(index);
}





}


