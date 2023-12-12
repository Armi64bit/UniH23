import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/models/bloc.model';
import { Etudiant } from 'src/app/models/etudiant.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-assign-toetudiant',
  templateUrl: './assign-toetudiant.component.html',
  styleUrls: ['./assign-toetudiant.component.css']
})
export class AssignToetudiantComponent implements OnInit {

  etudiants$!: Observable<Etudiant[]>;
  blocs$!: Observable<Bloc[]>;

  selectedBlocId: number = 0;
  selectedEtudiantId: number = 0;

  constructor(
    private blocService: BlocServiceService,
    private snackBar: MatSnackBar,
    private es:EtudiantService
  ) {}

  ngOnInit(): void {
    this.loadEtudiants();
    this.loadBlocs();
  }

  loadEtudiants() {
    this.etudiants$ = this.es.getEtudiants();
  }

  loadBlocs() {
    this.blocs$ = this.blocService.getAllBlocs();
  }

  assignToEtudiant() {
    this.blocService.assignStudentToBloc(this.selectedEtudiantId, this.selectedBlocId).subscribe(
      () => {
        this.snackBar.open('Étudiant assigné au bloc avec succès !', 'Fermer', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      error => {
        console.error('Erreur lors de l\'assignation de l\'étudiant au bloc:', error);
        this.snackBar.open('Une erreur est survenue. Veuillez réessayer plus tard.', 'Fermer', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  getEtudiantsAffectes(): Observable<Etudiant[]> {
    return this.etudiants$;
  }
}
