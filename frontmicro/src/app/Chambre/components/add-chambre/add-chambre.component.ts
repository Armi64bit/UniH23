import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';
import { Chambre, TypeChambre } from 'src/app/models/chambre.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent {
  chambre: Chambre = {
    idChambre: 0,
    numeroChambre: 0,
    typeC: TypeChambre.SIMPLE,
    reservations: [],

  };
  blocs: Bloc[]=[]

constructor(private bs : BlocServiceService,private chs: ChambreService, private router: Router) {}
ngOnInit(): void {
  // Fetch the list of blocs from the API when the component initializes
  this.bs.getAllBlocs().subscribe(
    (blocs: Bloc[]) => {
      this.blocs = blocs;
    },
    error => {
      console.error('Error fetching blocs', error);
    }
  );
}
addStudent(): void {
    this.chs.createChambre(this.chambre).subscribe(
        response => {
            console.log('Room added successfully', response);
            // Redirect to '/students/all' after successful addition
            this.router.navigate(['/chambre/all']);
        },
        error => {
            console.error('Error adding student', error);
            // Handle error here
        }
    );
}
}
