import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant.model';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';

@Component({
  selector: 'app-alletudiant',
  templateUrl: './alletudiant.component.html',
  styleUrls: ['./alletudiant.component.css']
})
export class AlletudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];
  reservation : Reservation[]=[];
  searchQuery: string = '';
  cin: number = 0; // Placeholder for cin
  nomEtudiant: string = ''; // Placeholder for nomEtudiant
  prenomEtudiant: string = ''; // Placeholder for prenomEtudiant
  searchResults: Etudiant[] = [];


  constructor(private etudiantServiceService: EtudiantService, private router: Router) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  navigateToUpdate(student: Etudiant): void {
    this.router.navigate(['/students/update', student.idEtudiant]);
  }

  loadEtudiants() {
    this.etudiantServiceService.getEtudiants().subscribe(
      (data: Etudiant[]) => {
        this.etudiants = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des étudiants:', error);
      }
    );
  }

  deleteStudent(student: Etudiant): void {
    const isConfirmed = confirm('Are you sure you want to delete this student?');
    if (isConfirmed) {
      this.etudiantServiceService.deleteStudent(student).subscribe(
        response => {
          // Remove the deleted student from the etudiants array
          this.etudiants = this.etudiants.filter(e => e.idEtudiant !== student.idEtudiant);
          // Optionally, display a success message
        },
        error => {
          // Handle error
        }
      );
    }
  }

  onSearchChange(): void {
    if (this.searchQuery.trim() !== '') {
      this.etudiantServiceService.searchEtudiants(this.searchQuery).subscribe(
        data => {
          this.etudiants = data;
        },
        error => {
          console.error('Error fetching search results', error);
          // Optionally, you can add more detailed error handling here
        }
      );
    } else {
      // If the search query is empty, reload all students
      this.loadEtudiants();
    }
  }
  onAdvancedSearch() {
    // Clear previous search results
    this.searchResults = [];
  
    // Iterate over etudiants and check if the search query matches any criteria
    for (let etudiant of this.etudiants) {
      if (
        this.matchesCriteria(etudiant.idEtudiant.toString()) ||
        this.matchesCriteria(etudiant.nomEtudiant) ||
        this.matchesCriteria(etudiant.prenomEtudiant) ||
        this.matchesCriteria(etudiant.ecole) ||
        this.matchesCriteria(etudiant.cin.toString()) ||
        this.matchesCriteria(etudiant.dateNaissance.toString()) // Adjust based on the actual date format
      ) {
        this.searchResults.push(etudiant);
      }
    }
  }
  
  matchesCriteria(value: string): boolean {
    // Convert both the value and the search query to lowercase for a case-insensitive search
    return value.toLowerCase().includes(this.searchQuery.toLowerCase());
  }
  

  OpenModel(){
    const modeldiv=document.getElementById('myModal');
    if(modeldiv!=null){
      modeldiv.style.display ='block'

    }

  }
  CloseModel(){
    const modeldiv=document.getElementById('myModal');
    if(modeldiv!=null){
      modeldiv.style.display ='none'

    }

  }



  
}
