import { Component, OnInit } from '@angular/core';
import { BlocServiceService } from 'src/app/services/bloc-service.service';

@Component({
  selector: 'app-all-blocs',
  templateUrl: './all-blocs.component.html',
  styleUrls: ['./all-blocs.component.css']
})
export class AllBlocsComponent implements OnInit {
  blocs: any[] = []; // Initialisez le tableau dans le constructeur pour éviter l'erreur TS2564

  constructor(private blocServiceService: BlocServiceService) { }

  ngOnInit(): void {
    this.loadBlocs();
  }

  loadBlocs() {
    this.blocServiceService.getAllBlocs().subscribe(
      data => {
        this.blocs = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des blocs:', error);
      }
    );
  }
}

  


