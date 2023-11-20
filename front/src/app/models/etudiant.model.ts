
// etudiant.model.ts

export interface Etudiant {
    idEtudiant: number;
    nomEtudiant: string;
    prenomEtudiant: string;
    ecole: string;
    cin: number;
    dateNaissance: Date;
  //  foyer: Foyer; // Make sure to import the correct Foyer model
    //chambres: Chambre[]; // Make sure to import the correct Chambre model
  }
  