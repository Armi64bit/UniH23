import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Foyer } from 'src/app/models/foyer.model';
import { FoyerService } from 'src/app/services/foyer.service';
import { AddFoyerComponent } from '../add-foyer/add-foyer.component';
import { DeleteFoyerComponent } from '../delete-foyer/delete-foyer.component';
import { DetailsFoyerComponent } from '../details-foyer/details-foyer.component';
import { UpdateFoyerComponent } from '../update-foyer/update-foyer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-foyer',
  templateUrl: './all-foyer.component.html',
  styleUrls: ['./all-foyer.component.css']
})
export class AllFoyerComponent {

  foyers: Foyer[] = [];
  selectedFoyer: Foyer | undefined;

  constructor(private foyerService: FoyerService, private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.getFoyers();
  }
  
  //get all foyers
  getFoyers(): void {
    this.foyerService.getAllFoyers().subscribe(
       (foyers) => {
         this.foyers = foyers;
            },
       (error) => {
         console.error('Error fetching foyers:', error);
       }
     );
  }

  //open details foyer
  openDetailsModal(foyer: Foyer): void {
    const modalRef = this.modalService.open(DetailsFoyerComponent, { size: 'lg' });
    modalRef.componentInstance.selectedFoyer = foyer;
    console.log('Modal Reference:', modalRef);
  }

  //open add Foyer form-modal
  openAddFoyerModal(): void {
     const modalRef = this.modalService.open(AddFoyerComponent, { size: 'lg' });

     // Handle modal close or dismiss if needed
     modalRef.result.then(
         (result) => {
             console.log('Modal closed with:', result);
             this.getFoyers();
           },
         (reason) => {
             console.log('Modal dismissed with:', reason);
         }
     );
}
//
openUpdateModal(foyer: Foyer): void {
   const modalRef = this.modalService.open(UpdateFoyerComponent, { size: 'lg' });
   modalRef.componentInstance.selectedFoyer = foyer;

   modalRef.result.then(
     (result) => {
       console.log('Update modal closed with:', result);
       this.getFoyers();
     },
     (reason) => {
       console.log('Update modal dismissed with:', reason);
     }
   );
}
//
openDeleteModal(foyer: Foyer): void {
   const modalRef = this.modalService.open(DeleteFoyerComponent, { size: 'lg' });
   modalRef.componentInstance.selectedFoyer = foyer;

   modalRef.result.then(
     (result) => {
       console.log('Delete modal closed with:', result);
       this.getFoyers();
     },
     (reason) => {
       console.log('Delete modal dismissed with:', reason);
     }
   );
}

//
navigateToFoyerList(): void {
  // Navigate to Foyer List component
  this.router.navigate(['/foyer-list']);
}
}

