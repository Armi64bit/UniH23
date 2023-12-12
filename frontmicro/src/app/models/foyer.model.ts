export interface Foyer {
  idFoyer: number;
  nomFoyer: string;
  capaciteFoyer: number;
  universite: Universite;
  blocList: Bloc[];
}
// Universite Model
export interface Universite {
  idUniversite: number;
  nomUniversite: string;
  adresse: string;
}

// Bloc Model
export interface Bloc {
  idBloc: number;
  nomBloc: string;
  capacityBloc: number;
  foyer: Foyer;
  chambres: Chambre[];
}

// Chambre Model
export interface Chambre {
  idChambre: number;
  numeroChambre: number;
  typeC: TypeChambre;
  reservations: Reservation[];
  bloc: Bloc;
}

// TypeChambre Enum
export enum TypeChambre {
  SIMPLE = 'SIMPLE',
  DOUBLE = 'DOUBLE',
  TRIPLE = 'TRIPLE',
}

// Reservation Model
export interface Reservation {
  idReservation: number;
  annerUniversitaire: Date;
  estValide: boolean;
  etudiants: Etudiant[];
}
export interface Etudiant {
  idEtudiant: number;
  nomet: string;
  prenomEtm: string;
  cin: number;
  ecole: string;
  dateNaissance: Date;
  reservations: Reservation[];
}
