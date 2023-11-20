import { Bloc } from './bloc.model';

export interface Chambre {
    idChambre: number;
    numeroChambre: number;
    typeC: TypeChambre;
    reservations: any[]; // Replace with the actual type of reservations if available
    bloc: Bloc; // This should be of type Bloc, not an object literal
  }

export enum TypeChambre {
  SIMPLE = 'SIMPLE',
  DOUBLE = 'DOUBLE',
  TRIPLE = 'TRIPLE',
}

export interface Reservation {
  // Define reservation properties if needed
}
