import { Bloc } from './bloc.model';

export interface Chambre {
    idChambre: number;
    numeroChambre: number;
    typeC: TypeChambre;
    reservations: any[]; // Replace with the actual type of reservations if available

  }

export enum TypeChambre {
  SIMPLE = 'SIMPLE',
  DOUBLE = 'DOUBLE',
  TRIPLE = 'TRIPLE',
}


