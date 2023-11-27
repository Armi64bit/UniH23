import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Foyer } from 'src/app/models/foyer.model';
//import { FoyerService } from 'src/app/services/foyer-service.service';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent {
    university: University = {
    idUniversity: 0,
    nomUniversity: '',
    adresse: '',
    // foyer: {
    //   idFoyer: 0,
    //   nomFoyer: '',
    //   capaciteFoyer: 0,
    // }
  };
  //foyers: Foyer[]=[]

constructor(private uni: UniversityService, private router: Router) {}
ngOnInit(): void {
  // Fetch the list of foyers from the API when the component initializes

}
addUniversity(): void {
    this.uni.createUniversity(this.university).subscribe(
        response => {
            console.log('university added successfully', response);
            this.router.navigate(['/university/getAll']);
        },
        error => {
            console.error('Error adding university', error);
        }
    );
}
}
