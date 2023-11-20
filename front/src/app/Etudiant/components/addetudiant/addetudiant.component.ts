import { Component } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service'; // Import your data service
import { Router } from '@angular/router';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent {
  student: Etudiant = {
      idEtudiant: 0,
      nomEtudiant: '',
      prenomEtudiant: '',
      ecole: '',
      cin: 0,
      dateNaissance: new Date(),
      // ... other fields ...
  };

  constructor(private etudiantService: EtudiantService, private router: Router) {}
  addStudent(): void {
    this.etudiantService.addStudent(this.student).subscribe(
        response => {
            console.log('Student added successfully', response);
            // Redirect to '/students/all' after successful addition
            this.router.navigate(['/students/all']);
        },
        error => {
            console.error('Error adding student', error);
            // Handle error here
        }
    );
}
}