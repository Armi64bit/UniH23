import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Bloc } from 'src/app/models/bloc.model';
import { Chambre, TypeChambre } from 'src/app/models/chambre.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css']
})
export class UpdateChambreComponent {
  chambre: Chambre = {
    idChambre: 0,
    numeroChambre: 0,
    typeC: TypeChambre.SIMPLE,
    reservations: [],
    bloc: {
      idBloc: 0,
      nomBloc: '',
      capacityBloc: 0,
    }
  };
  blocs: Bloc[]=[]
  updating = false;
  updateSuccess = false;
  updateFailure = false;
  constructor(
    private bs : BlocServiceService,
    private chs: ChambreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void { // Use ngOnInit for initialization

    this.bs.getAllBlocs().subscribe(
      (blocs: Bloc[]) => {
        this.blocs = blocs;
      },
      error => {
        console.error('Error fetching blocs', error);
      }
    );
    const id = parseInt(this.route.snapshot.params['id'], 10); // Get ID from route and parse it as a number
    if (id) {
      this.fetchch(id);
    }
  }
  fetchch(id: number): void {
    this.chs.getChambre(id).subscribe( // Correct method to fetch student data
      (data: Chambre) => {
        this.chambre = data;
      },
      error => {
        // Handle errors here
      }
    );
  }
  updateCh(): void {
    this.updating = true;

    this.chs.updateChambre(this.chambre).pipe(delay(1000)).subscribe(
      response => {
        // Handle the response
        this.updateSuccess = true;
        this.updateFailure = false;

        this.router.navigate(['/chambre/all']);

        // Reset the status after a delay
        setTimeout(() => {
          this.updating = false;
          this.updateSuccess = false;
          this.updateFailure = false;
        }, 2000);
      },
      error => {
        // Handle errors
        console.error('Error during update:', error);
        this.updateSuccess = false;
        this.updateFailure = true;
        this.updating = false; // Reset in case of error
      }
    );
  }
}
