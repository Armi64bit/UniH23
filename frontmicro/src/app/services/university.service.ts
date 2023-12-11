import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private baseUrl = 'http://localhost:8081/springProjectTwin2/University';   // Replace with your API endpoint

  constructor(private http: HttpClient) {}


  associateFoyerToUniversity(idFoyer: number, nomUniversity: string): Observable<University> {
    const url = `${this.baseUrl}/${idFoyer}/${nomUniversity}`;
    return this.http.put<University>(url, null);
  }

  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(`${this.baseUrl}/getAll`);
  }

  getUniversityById(id: number): Observable<University> {
    return this.http.get<University>(`${this.baseUrl}/get/${id}`);
  }
  createUniversity(university: University): Observable<any> {
    const url = 'http://localhost:8081/springProjectTwin2/University/addUniversity';
    return this.http.post<any>(url, university);
  }

  updateUniversity( university: University): Observable<any> {
    const url = `http://localhost:8081/springProjectTwin2/University/updateUniversity`;
    return this.http.put(url, university);
  }

  deleteUniversity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  getUniversByNomUnivers(nomUniversity: string): Observable<University> {
    return this.http.get<University>(`${this.baseUrl}/search/${encodeURIComponent(nomUniversity)}`);
  }

  getUniversByNomFoyer(nomFoyer: String): Observable<University> {
    return this.http.get<University>(`${this.baseUrl}/searchbyFoyer/${nomFoyer}`);
  }

  getUniversByAdresse(adresse : String) : Observable<University[]>{
    return this.http.get<University[]>(`${this.baseUrl}/searchbyAdresseUnivers/${adresse}`);
  }

  getNombreTotalChambres(nomUniversity: String): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${nomUniversity}/statnombreTotalChambres`);
  }
  getNombreTotalChambresForAll(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.baseUrl}/statnombreTotalChambresForAll`);
  }

  getByNombreMinChambres(nombreMinChambres: number): Observable<University[]> {
    return this.http.get<University[]>(`${this.baseUrl}/nombreMinChambres/${nombreMinChambres}`);
  }

}
