import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-add',
  templateUrl: './foyer-add.component.html',
  styleUrls: ['./foyer-add.component.css']
})
export class CreateFoyerComponent {
  foyer: Foyer = {
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0
    // Add more properties as needed for the Foyer model
  };

  constructor(private foyerService: FoyerService, private router: Router) {}

  addFoyer(): void {
    this.foyerService.createFoyer(this.foyer).subscribe(
      response => {
        console.log('Foyer added successfully', response);
        // Redirect to '/foyer/all' after successful addition
        this.router.navigate(['/foyer/all']);
      },
      error => {
        console.error('Error adding foyer', error);
        // Handle error here
      }
    );
  }
}
