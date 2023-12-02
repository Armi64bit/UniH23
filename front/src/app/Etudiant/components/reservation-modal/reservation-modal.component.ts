import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Reservation } from 'src/app/models/reservation';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.css']
})
export class ReservationModalComponent implements OnInit {
  reservations: Reservation[] = [];
  isModalOpen: boolean = false;

  constructor(private modalService: ModalService, private etudiantService: EtudiantService) {}

  ngOnInit() {
    this.modalService.modalStatus$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
      if (isOpen) {
        // Get the etudiantId from the ModalService
        const etudiantId = this.modalService.getEtudiantId();

        // Check if etudiantId is not null before fetching reservations
        if (etudiantId !== null) {
          // Fetch the list of reservations for the selected student
          this.etudiantService.getReservationsForEtudiant(etudiantId).subscribe(
            (reservations: Reservation[]) => {
              // Update the reservations in the modal component
              this.reservations = reservations;
            },
            (error) => {
              console.error('Error fetching reservations', error);
              // Handle error appropriately
            }
          );
        }
      }
    });
  }

  closeModal() {
    // Implement any additional logic needed before closing the modal
    // (e.g., resetting form values, etc.)
    this.modalService.closeModal();
  }

  preventClosing(event: Event) {
    // Prevent the modal from closing when clicking inside the modal content
    event.stopPropagation();
  }
}
