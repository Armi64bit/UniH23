import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Reservation } from './models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalStatusSource = new Subject<boolean>();
  modalStatus$ = this.modalStatusSource.asObservable();

  private modalOpen = false;
  private idEtudiant: number | null = null; // Initialize with null
  private reservations: Reservation[] = [];

  constructor() {}

  openModal(isOpen: boolean, idEtudiant: number | null): void {
    this.idEtudiant = idEtudiant;
    this.modalOpen = isOpen;
    this.modalStatusSource.next(isOpen);
  }

  closeModal(): void {
    this.idEtudiant = null;
    this.modalOpen = false;
    this.modalStatusSource.next(false);
  }

  getModalStatus(): boolean {
    return this.modalOpen;
  }

  setReservations(reservations: Reservation[]): void {
    this.reservations = reservations;
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getEtudiantId(): number | null {
    return this.idEtudiant;
  }
}
