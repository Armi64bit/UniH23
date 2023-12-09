import { Component, NgZone } from '@angular/core';
import { Chambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/services/chambre.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-all-chambre',
  templateUrl: './all-chambre.component.html',
  styleUrls: ['./all-chambre.component.css'],
  animations: [
    trigger('searchAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter, :leave', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AllChambreComponent {
  chambres: Chambre[] = [];
  searchQuery: string = '';
  noResults: boolean = false;
  loading: boolean = true;
  constructor(private ngZone: NgZone,private chs: ChambreService, private router: Router) {}

  ngOnInit(): void {
    this.loadch();
  }
  navigateToUpdate(ch: Chambre): void {
    this.router.navigate(['/chambre/update', ch.idChambre]);
  }
  loadch() {this.loading = true;

    this.chs.getChambres().pipe(
      // Introduce a 1-second delay
      delay(1000)
    ).subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
        this.loading = false;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des étudiants:', error);
        this.loading = false;
      }
    );
  }

  deleteStudent(ch: Chambre): void {
    const isConfirmed = confirm('Are you sure you want to delete this student?');
    if (isConfirmed) {
      this.chs.deleteChambre(ch.idChambre).subscribe(
        response => {
          // Remove the deleted student from the etudiants array
          this.chambres = this.chambres.filter(e => e.idChambre !== ch.idChambre);
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
      this.chs.searchChambre(this.searchQuery).subscribe(
        data => {
          this.chambres = data;
          this.noResults = this.chambres.length === 0;

        },
        error => {
          console.error('Error fetching search results', error);
          // Optionally, you can add more detailed error handling here
        }
      );
    } else {
      // If the search query is empty, reload all students
      this.loadch();
      this.noResults = false; // Reset the noResults flag when the search query is empty

    }
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

  }}
