import { University } from "./university.model";
export interface Foyer{
    idFoyer: number;
    nomFoyer: string;
    capaciteFoyer: number;
    university?: University;
}
