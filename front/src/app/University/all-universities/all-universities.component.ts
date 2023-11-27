import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-all-universities',
  templateUrl: './all-universities.component.html',
  styleUrls: ['./all-universities.component.css'],
  animations: [
    trigger('searchAnimation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('*', style({ opacity: 1, transform: 'translateY(0)' })),
      transition(':enter, :leave', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AllUniversitiesComponent {
  universities: University[] = [];
  searchQuery: string = '';
  noResults: boolean = false;

  constructor(private uni: UniversityService , private router: Router) {}
  ngOnInit(): void {
    this.loadch();
  }
  navigateToUpdate(un: University): void {
    this.router.navigate(['/University/updateUniversity', un.idUniversity]);
  }
  loadch() {
    this.uni.getAllUniversities().subscribe(
      (data: University[]) => {
        this.universities = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des universités:', error);
      }
    );
  }

  deleteUniversity(un: University): void {
    const isConfirmed = confirm('Are you sure you want to delete this university?');
    if (isConfirmed) {
      this.uni.deleteUniversity(un.idUniversity).subscribe(
        response => {
          // Remove the deleted university from the universities array
          this.universities = this.universities.filter(u => u.idUniversity !== un.idUniversity);
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
      this.uni.searchUniversity(this.searchQuery).subscribe(
        data => {
          this.universities = data;
          this.noResults = this.universities.length === 0;

        },
        error => {
          console.error('Error fetching search results', error);
        }
      );
    } else {
      // If the search query is empty, reload all universities
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

  }
  updateUniversity(id: number): void {
    this.router.navigate(['/university/updateUniversity', id]);
  }
}
