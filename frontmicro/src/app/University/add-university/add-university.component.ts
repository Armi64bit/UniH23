import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
//For reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent {
  universityForm!: FormGroup;
    university: University = {
    idUniversity: 0,
    nomUniversity: '',
    adresse: '',
    foyer: {
      idFoyer: 0,
      nomFoyer: '',
      capaciteFoyer: 0,
    }
  };
  foyers: Foyer[]=[]

constructor(
  private fb: FormBuilder,
  private uni: UniversityService,
  private foyerService: FoyerService,
  private router: Router) {
    this.buildForm();

  }
ngOnInit(): void {
  this.loadFoyers();

}
buildForm(): void {
  this.universityForm = this.fb.group({
    nomUniversity: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(15), // Maximum length
    Validators.pattern(/^[a-zA-Z\s]*$/)]],
    adresse: ['', [Validators.required, Validators.minLength(4)]],
    foyer: [null, Validators.required], // Provide an initial value (null or a default foyer)
  });
}
// addUniversity(): void {
//     this.uni.createUniversity(this.university).subscribe(
//         response => {
//             console.log('university added successfully', response);
//             this.router.navigate(['/university/getAll']);
//         },
//         error => {
//             console.error('Error adding university', error);
//         }
//     );
// }
addUniversity(): void {
  const universityData = this.universityForm.value as University;

  this.uni.createUniversity(universityData).subscribe(
    (response) => {
      console.log('University added successfully', response);
      this.router.navigate(['/university/getAll']);
    },
    (error) => {
      console.error('Error adding university', error);
    }
  );
}

loadFoyers(): void {
  this.foyerService.getFoyers().subscribe(
    data => {
      this.foyers = data;
    },
    error => {
      console.error('Error fetching foyers', error);
    }
  );
}
}
