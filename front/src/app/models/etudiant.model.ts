import { Reservation } from "./reservation";

export interface Etudiant {
  idEtudiant: number;
  nomEtudiant: string;
  prenomEtudiant: string;
  ecole: string;
  cin: number;
  dateNaissance: Date;
  reservations: Reservation[]; // Assuming Reservation is another model
}
