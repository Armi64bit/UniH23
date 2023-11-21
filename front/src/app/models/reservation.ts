import { Etudiant } from "./etudiant.model";

export interface Reservation {
    idReservation: string;
    annerUniversitaire: Date;
    estValide: boolean;
    etudiants: Etudiant[]; // Assuming Etudiant is another model
  

  }
  