
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent {
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
    private foyerService : FoyerService,
    private uni: UniversityService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal


  ) {}

  ngOnInit(): void {
    this.loadFoyers();

    const id = parseInt(this.route.snapshot.params['id'], 10); // Get ID from route and parse it as a number
    if (id) {
      this.fetchun(id);
    }
  }
  fetchun(id: number): void {
    this.uni.getUniversityById(id).subscribe( // Correct method to fetch student data
      (data: University) => {
        this.university = data;
      },
      error => {
        // Handle errors here
      }
    );
  }
  updateUn(): void {
    this.uni.updateUniversity(this.university).subscribe(
      response => {
        // Handle the response
        this.router.navigate(['/university/getAll']);
      },
      error => {
        // Handle errors
        console.error('Error during update:', error);
      }
    );
  }
  openModal(content: any): void {
    this.modalService.open(content, { centered: true });
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
