// modify-bloc.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc.model';
import { BlocServiceService } from 'src/app/services/bloc-service.service';

@Component({
  selector: 'app-modify-bloc',
  templateUrl: './modify-bloc.component.html',
  styleUrls: ['./modify-bloc.component.css']
})
export class ModifyBlocComponent implements OnInit {
  bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capacityBloc: 0,
    foyer: { idFoyer: 0, nomFoyer: '' },
  };

  constructor(
    private blocService: BlocServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idBloc = +params['idBloc'];
      this.loadBloc(idBloc);
    });
  }

  loadBloc(idBloc: number): void {
    this.blocService.getChambre(idBloc).subscribe(
      data => {
        this.bloc = data;
      },
      error => {
        console.error('Error loading bloc:', error);
      }
    );
  }

  goToBlocList() {
    this.router.navigate(['/bloc/all']);
  }

  updateBloc(): void {
    this.blocService.updateChambre(this.bloc).subscribe(
      error => console.log('Error updating bloc:', error)
    );
  }
}

