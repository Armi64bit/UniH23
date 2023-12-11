import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from '../models/foyer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8081/springProjectTwin2/foyer';   // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/all`);
  }

  getFoyer(id: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/retrieve/${id}`);
  }

  createFoyer(chambre: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/add`, chambre);
  }

  updateFoyer( chambre: Foyer): Observable<any> {
    const url = `http://localhost:8081/springProjectTwin2/foyer/modify`;
    return this.http.put(url, chambre);
  }

  deleteFoyer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/remove/${id}`);
  }
  searchFoyer(nom: string): Observable<Foyer[]> {
    const url = `${this.apiUrl}/search/${nom}`;
    return this.http.get<Foyer[]>(url);
  }
  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/getAll`);
  }
}
