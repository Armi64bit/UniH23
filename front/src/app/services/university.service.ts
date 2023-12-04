import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private baseUrl = 'http://localhost:8085/gestionFoyerProject/University';   // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(`${this.baseUrl}/getAll`);
  }

  getUniversityById(id: number): Observable<University> {
    return this.http.get<University>(`${this.baseUrl}/get/${id}`);
  }
  createUniversity(university: University): Observable<any> { 
    const url = 'http://localhost:8085/gestionFoyerProject/University/addUniversity';
    return this.http.post<any>(url, university); 
  }

  updateUniversity( university: University): Observable<any> {
    const url = `http://localhost:8085/gestionFoyerProject/University/updateUniversity`;
    return this.http.put(url, university);
  }

  deleteUniversity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  searchUniversity(nomUniversity: string): Observable<University[]> {
    const url = `${this.baseUrl}/search/${nomUniversity}`;
    return this.http.get<University[]>(url);
  }
}
