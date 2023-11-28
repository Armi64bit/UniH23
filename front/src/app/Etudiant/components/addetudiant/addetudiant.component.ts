import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent {
    @ViewChild('studentForm', { static: true }) studentForm!: NgForm;

  prenomEtudiant: FormControl;
  
  student: Etudiant = {
    idEtudiant: 0,
    nomEtudiant: '',
    prenomEtudiant: '',
    ecole: '',
    cin: 0,
    dateNaissance: new Date(),
    reservation: []  
    // ... other fields ...
  };

  constructor(private etudiantService: EtudiantService, private router: Router) {
    this.prenomEtudiant = new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z]*')]);
  }

  test(err: any) {
    console.log(err);
  }

  addStudent(): void {
    this.etudiantService.addStudent(this.student).subscribe(
      (response: any) => {
        console.log('Student added successfully', response);
        // Redirect to '/students/all' after successful addition
        this.router.navigate(['/students/all']);
      },
      (error: any) => {
        console.error('Error adding student', error);
        // Handle error here with more specificity if needed
      }
    );
  }

  hasError(controlName: string, errorType: string): boolean {
    const control = this.studentForm.controls[controlName];
    return control?.hasError(errorType) || false;
}
}
