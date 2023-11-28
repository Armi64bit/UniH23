

import { Etudiant } from "./etudiant.model";

export interface Reservation {
    idReservation: String;
    estValide: boolean;
    annerUniversitaire: Date;
    etudiant: Etudiant[]; 
  }
  
