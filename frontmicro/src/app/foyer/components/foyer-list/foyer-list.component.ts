import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent {

    foyers: any[] = []; // Initialize the array in the constructor to avoid TS2564 error

    constructor(private router: Router, private foyerService: FoyerService) { }

    ngOnInit(): void {
      this.loadFoyers();
    }

    navigateToUpdate(foyer: Foyer): void {
      this.router.navigate(['/foyer/update', foyer.idFoyer]);
    }

    deleteFoyer(foyer: Foyer): void {
      const isConfirmed = confirm('Are you sure you want to delete this foyer?');
      if (isConfirmed) {
        this.foyerService.deleteFoyer(foyer.idFoyer).subscribe(
          response => {
            // Remove the deleted foyer from the foyers array
            this.foyers = this.foyers.filter(e => e.idFoyer !== foyer.idFoyer);
            // Optionally, display a success message
          },
          error => {
            // Handle error
          }
        );
      }
    }

    loadFoyers() {
      this.foyerService.getFoyers().subscribe(
        data => {
          this.foyers = data;
        },
        error => {
          console.error('An error occurred while fetching foyers:', error);
        }
      );
    }
  }


