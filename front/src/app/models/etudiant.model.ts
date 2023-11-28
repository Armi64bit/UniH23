
// etudiant.model.ts

import { Reservation } from "./reservation";

export interface Etudiant {
    idEtudiant: number;
    nomEtudiant: string;
    prenomEtudiant: string;
    ecole: string;
    cin: number;
    dateNaissance: Date;
    reservation: Reservation[]; // Make sure to import the correct Chambre model
}
  