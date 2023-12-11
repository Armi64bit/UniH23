import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { University } from 'src/app/models/university.model';
import { UniversityService } from 'src/app/services/university.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UniTableDetailsComponent } from '../uni-table-details/uni-table-details.component';

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
  rechercheParAdresse: boolean = false;
  adresseRecherchee: University['adresse'] = '' ;
  //searchQuery: string = '';
  noResults: boolean = false;
    // Pagination variables
  page: number = 1;
  itemsPerPage: number = 4; // Number of items to display per page
  totalItems: number = 0; // Initialize totalItems
  selectedUniversity: University | null = null;

  constructor(
    private uni: UniversityService , 
    private router: Router,
    private modalService: NgbModal) {}
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
        this.totalItems = this.universities.length;
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

  rechercherParAdresse(): void {
    if (this.adresseRecherchee) {
      this.uni.getUniversByAdresse(this.adresseRecherchee).subscribe(
        reponse => this.universities = reponse 
      );
    }
  }

  reloadUniversities() {
    this.loadch();
  }

  annulerRecherche(): void {
    this.adresseRecherchee = '';
    // Réinitialisez la liste filtrée avec toutes les universités
    this.reloadUniversities();
  }

  downloadAsPDF(): void {
    const doc = new jsPDF();
  
    // Add title to the PDF
    const title = 'All Universities List';
    doc.setFontSize(18);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
  
    // Add a line below the title
    doc.setLineWidth(0.5);
    doc.line(20, 20, doc.internal.pageSize.getWidth() - 20, 20);
  
    // Add table headers
    const headers = [['ID', 'University Name', 'University Address', 'Foyer']];
    // Map universities data to rows
    const data = this.universities.map(u => [u.idUniversity, u.nomUniversity, u.adresse, u.foyer?.nomFoyer || 'N/A']);
  
    (doc as any).autoTable({
      head: headers,
      body: data,
      startY: 25, 
    });
  
    // Save the PDF
    doc.save('universities.pdf');
  }

  convertToCSV(data: any[], includeHeader: boolean = true): string {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(item => {
      // Customize the appearance 
      const formattedData = {
        idUniversity: item.idUniversity,
        nomUniversity: item.nomUniversity,
        adresse: item.adresse,
        foyer: item.foyer ? item.foyer.nomFoyer : 'N/A',
      };
  
      return Object.values(formattedData).join(',');
    });
  
    return includeHeader ? `${header}\n${rows.join('\n')}` : rows.join('\n');
  }
  
  downloadAsCSV(): void {
    const csvContent = this.convertToCSV(this.universities);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'universities.csv';
    link.click();
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/university', id]);
  }

  // openUniversityDetailsPopup(university: University): void {
  //   const popupWindow = window.open('', '_blank', 'width=600,height=400');
    
  //   if (popupWindow) {
  //     // Create the content for the popup
  //     const popupContent = `
  //       <h1>University Details</h1>
  //       <p>ID: ${university.idUniversity}</p>
  //       <p>Name: ${university.nomUniversity}</p>
  //       <p>Address: ${university.adresse}</p>
  //       <p>Foyer: ${university.foyer?.nomFoyer || 'N/A'}</p>
  //       <!-- Add other details as needed -->
  //     `;
      
  //     // Inject the content into the popup
  //     popupWindow.document.write(popupContent);
  //   } else {
  //     console.error('Popup blocked. Please allow popups for this site.');
  //   }
  // }
  openDetailsModal(content: any, university: University): void {
    const modalOptions: NgbModalOptions = {
      backdrop: false, // Set backdrop to false to remove the overlay
      size: 'md',
    };

    this.selectedUniversity = university;
    this.modalService.open(content, modalOptions);
  }
}
