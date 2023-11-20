import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/models/chambre.model';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-all-chambre',
  templateUrl: './all-chambre.component.html',
  styleUrls: ['./all-chambre.component.css']
})
export class AllChambreComponent {
  chambres: Chambre[] = [];
  searchQuery: string = '';
  constructor(private chs: ChambreService, private router: Router) {}

  ngOnInit(): void {
    this.loadch();
  }
  navigateToUpdate(ch: Chambre): void {
    this.router.navigate(['/chambre/update', ch.idChambre]);
  }
  loadch() {
    this.chs.getChambres().subscribe(
      (data: Chambre[]) => {
        this.chambres = data;
      },
      (error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des étudiants:', error);
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

}
