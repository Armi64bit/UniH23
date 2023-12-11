import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre.model';


@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://localhost:8051/chambre';   // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getChambres(): Observable<Chambre[]> {
    return this.http.get<Chambre[]>(`${this.apiUrl}/all-chambres`);
  }

  getChambre(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.apiUrl}/retrieve/${id}`);
  }

  createChambre(chambre: Chambre): Observable<Chambre> {
    return this.http.post<Chambre>(`${this.apiUrl}/add`, chambre);
  }

  updateChambre( chambre: Chambre): Observable<any> {
    const url = `http://localhost:8051/chambre/modify`;
    return this.http.put(url, chambre);
  }

  deleteChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${id}`);
  }
  searchChambre(nom: string): Observable<Chambre[]> {
    const url = `${this.apiUrl}/search/${nom}`;
    return this.http.get<Chambre[]>(url);
  }
}
