import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Bloc } from '../models/bloc.model';
import { Foyer } from '../models/foyer.model';
import { Etudiant } from '../models/etudiant.model';
@Injectable({
  providedIn: 'root'
})
export class BlocServiceService {


   private baseUrl = 'http://localhost:8081/springProjectTwin2/bloc';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/all`);
  } createChambre(chambre: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.baseUrl}/add`, chambre);
  }

  updateChambre( chambre: Bloc): Observable<any> {
    const url = `http://localhost:8081/springProjectTwin2/bloc/updateBloc/${chambre.idBloc}`;
    return this.http.put(url, chambre);
  }

  deleteChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove/${id}`);
  }
  getChambre(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.baseUrl}/retrieve/${id}`);
  }
  assignStudentToBloc(idEtudiant: number, idBloc: number): Observable<any> {
    const url = this.baseUrl + '/' + idBloc + '/assignStudent/' + idEtudiant;

     return this.http.post(url, null)  // null pour le corps de la requête, car c'est une requête POST sans corps

       }
       getAllEtudiants(): Observable<Etudiant[]> {
        return this.http.get<Etudiant[]>(this.baseUrl);
      }


}
