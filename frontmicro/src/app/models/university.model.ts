import { Foyer } from "./foyer.model";
export interface University{
    idUniversity: number;
    nomUniversity: string;
    adresse: string;
    foyer?: Foyer; // Make sure to import the correct Foyer model
}

