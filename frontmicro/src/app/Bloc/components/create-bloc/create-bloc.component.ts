// create-bloc.component.ts

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Foyer } from 'src/app/models/foyer.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { Bloc } from 'src/app/models/bloc.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from 'src/app/services/foyer.service';
@Component({
  selector: 'app-create-bloc',
  templateUrl: './create-bloc.component.html',
  styleUrls: ['./create-bloc.component.css']
})
export class CreateBlocComponent implements OnInit {

blocForm: FormGroup;
  // Définissez la propriété foyers
  foyers: Foyer[] = [];
  bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capacityBloc: 0,
    foyer: { idFoyer: 0, nomFoyer: '' },
     // Assurez-vous d'avoir la propriété chambres dans le modèle Bloc
  };

  // Injectez le service et HttpClient dans le constructeur
  constructor(private blocService: BlocServiceService,
    private fs :FoyerService,
    private http: HttpClient,
    private fb: FormBuilder
    ) {
       this.blocForm = this.fb.group({
      nomBloc: ['', [Validators.required, Validators.maxLength(50)]],
      capacityBloc: [0, [Validators.required, Validators.min(0)]],
      foyerId: [null, [Validators.required]],
    });
    }

  ngOnInit(): void {
    // Appelez la méthode loadFoyers lors de l'initialisation du composant
    this.loadFoyers();

    // Initialisations supplémentaires si nécessaire
  }

 addBloc(): void {
  // Retrieve the selected foyerId from the form
  const selectedFoyerId = this.blocForm.get('foyerId')!.value;

  // Check if a valid Foyer is selected
  if (!selectedFoyerId) {
    console.error('Please select a valid Foyer');
    // Add error handling or notify the user about the missing Foyer selection
    return;
  }

  // Update the bloc object with the selected Foyer and form values
  this.bloc.foyer.idFoyer = selectedFoyerId;
  this.bloc.nomBloc = this.blocForm.get('nomBloc')!.value;
  this.bloc.capacityBloc = this.blocForm.get('capacityBloc')!.value;

  // Call the method of the service to add the bloc
  this.blocService.createChambre(this.bloc).subscribe(
    (response: Bloc) => {
      console.log('Bloc ajouté avec succès:', response);
      // You can add logic here to redirect to another page or perform other actions after adding the bloc
    },
    (error) => {
      console.error('Erreur lors de l\'ajout du bloc:', error);
      // Add logic here to handle the error, for example, display an error message to the user
    }
  );
}

  loadFoyers() {
    // Utilisez votre service pour charger la liste des foyers
    this.fs.getFoyers().subscribe(
      (data: Foyer[]) => {
        this.foyers = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des foyers', error);
      }
    );
  }




  private handleError(error: any): Observable<never> {
    console.error('Erreur lors de la requête HTTP:', error);
    return throwError('Une erreur est survenue. Veuillez réessayer plus tard.');
  }

  // ... autres méthodes du composant
}

