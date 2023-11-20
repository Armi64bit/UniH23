import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chambre } from '../models/chambre.model';


@Injectable({
  providedIn: 'root',
})
export class ChambreService {
  private apiUrl = 'http://localhost:8081/springProjectTwin2/chambre';   // Replace with your API endpoint

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

  updateChambre( chambre: Chambre): Observable<Chambre> {
    return this.http.put<Chambre>(`${this.apiUrl}/modify/`, chambre);
  }

  deleteChambre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${id}`);
  }
}
