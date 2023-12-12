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

  getAllFoyers(): Observable<Foyer[]> {
    const apiUrl = `${this.apiUrl}/all`;
    return this.http.get<Foyer[]>(apiUrl);
  }

  addFoyer(foyer: Foyer, headers: any): Observable<Foyer> {
    const apiUrl = `${this.apiUrl}/add`;
    return this.http.post<Foyer>(apiUrl, foyer, { headers: headers });
  }

  editFoyer(foyer: Foyer): Observable<Foyer> {
    const apiUrl = `${this.apiUrl}/modify`;
    return this.http.put<Foyer>(apiUrl, foyer);
  }

  deleteFoyer(foyerId: number): Observable<void> {
    const apiUrl = `${this.apiUrl}/remove/${foyerId}`;
    return this.http.delete<void>(apiUrl);
  }

  getFoyersByCapacity(capacity: number): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/capacity/${capacity}`);
  }

}
