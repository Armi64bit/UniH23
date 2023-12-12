import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent {
  universityDetails: University = {
    idUniversity: 0,
    nomUniversity: '',
    adresse: '',
    foyer: {
      idFoyer: 0,  // Provide a default value for idFoyer, or modify as needed
      nomFoyer: '',
      capaciteFoyer: 0,
      blocList: [],
      universite: {
          idUniversite: 0,  // Provide a default value for idUniversite, or modify as needed
          nomUniversite: '',
          adresse: ''
      }
    }
  };

  nombreTotalChambres : number = 0 ;
  nombreMinChambres : number = 0 ;
  universites !: University[];

  constructor(private universityService: UniversityService,  private router: Router) {}


  rechercherDetailsUniversite(): void {

    if (this.universityDetails.idUniversity) {

      this.universityService.getUniversityById(this.universityDetails.idUniversity).subscribe(
        (data : University) => {
          this.universityDetails.adresse = data.adresse;
          this.universityDetails.nomUniversity = data.nomUniversity;
        },
        (error) => {
          console.error('Une erreur s\'est produite : ', error);
        }
      );

    } else if(this.universityDetails.nomUniversity){

      this.universityService.getUniversByNomUnivers(this.universityDetails.nomUniversity).subscribe(
        (data : University) => {
          this.universityDetails.adresse = data.adresse;
          this.universityDetails.nomUniversity = data.nomUniversity;
        },
        (error) => {
          console.error('Une erreur s\'est produite : ', error);
        }
      );

    } else if (this.universityDetails.foyer?.nomFoyer) {
      this.universityService.getUniversByNomFoyer(this.universityDetails.foyer.nomFoyer).subscribe(
        (data: University) => {

          this.universityDetails.adresse = data.adresse;
          this.universityDetails.nomUniversity = data.nomUniversity;

        },
        (error) => {
          console.error('Une erreur s\'est produite : ', error);
        }
      );
    }
  }

  getStatistique() {
    this.universityService.getNombreTotalChambres(this.universityDetails.nomUniversity).subscribe(
        (resultat) => (this.nombreTotalChambres = resultat),
        (erreur) => console.error('Erreur lors de la récupération de la statistique :', erreur)
      );
  }

  getUniversitesByNombreMinChambres(){

    if (this.nombreMinChambres) {
      this.universityService.getByNombreMinChambres(this.nombreMinChambres).subscribe(
        universites => this.universites = universites,
        erreur => console.error('Erreur lors de la récupération des universités :', erreur)
      );
    }

  }


  navigateBack(): void {
    this.router.navigate(['/university/getAll']);
  }
}

