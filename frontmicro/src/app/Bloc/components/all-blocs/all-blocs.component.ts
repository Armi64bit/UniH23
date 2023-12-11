// all-blocs.component.ts
import { Component, OnInit } from '@angular/core';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { FoyerService } from 'src/app/services/foyer.service';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';

@Component({
  selector: 'app-all-blocs',
  templateUrl: './all-blocs.component.html',
  styleUrls: ['./all-blocs.component.css']
})
export class AllBlocsComponent implements OnInit {
  blocs: Bloc[] = [];
  foyers: any[] = [];
  selectedBloc: Bloc | undefined;
  showModifyBloc: boolean = false;

  constructor(
    private router: Router,
    private blocServiceService: BlocServiceService,
    private foyerService: FoyerService
  ) {}

openModifyForm(bloc: Bloc): void {
    this.router.navigate(['bloc/update/', bloc.idBloc]);
  }
 navigateToUpdate(bloc: Bloc): void {
    this.router.navigate(['bloc/update/:idBloc', bloc.idBloc]);
  }
  handleBlocUpdate(updatedBloc: Bloc): void {
    // Mettez à jour le bloc dans la liste des blocs avec les nouvelles données
    const index = this.blocs.findIndex(b => b.idBloc === updatedBloc.idBloc);
    if (index !== -1) {
      this.blocs[index] = updatedBloc;
    }

    // Cacher le composant de modification
    this.showModifyBloc = false;
  }

  ngOnInit(): void {
    this.loadBlocs();
    this.loadFoyers();
  }

  loadBlocs() {
    this.blocServiceService.getAllBlocs().subscribe(
      data => {
        this.blocs = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des blocs:', error);
      }
    );
  }

  loadFoyers() {
    this.foyerService.getFoyers().subscribe(
      data => {
        this.foyers = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des foyers:', error);
      }
    );
  }

  DeleteBloc(bloc: Bloc): void {
    const isConfirmed = confirm('Are you sure you want to delete this bloc?');
    if (isConfirmed) {
      this.blocServiceService.deleteChambre(bloc.idBloc).subscribe(
        () => {
          this.blocs = this.blocs.filter(e => e.idBloc !== bloc.idBloc);
        },
        error => {
          console.error('Error during deletion:', error);
        }
      );
    }
  }

  // Ajoutez ici les fonctions nécessaires pour ajouter un bloc
}

