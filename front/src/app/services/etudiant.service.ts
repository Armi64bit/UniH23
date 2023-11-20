import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = 'http://localhost:8081/springProjectTwin2/etudiant'; // Update with your actual API URL

  constructor(private http: HttpClient) { }
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>('http://localhost:8081/springProjectTwin2/etudiant/all-etudiants');
  }
  addStudent(student: Etudiant): Observable<any> {  // The return type can be any or specific based on your backend response
    const url = 'http://localhost:8081/springProjectTwin2/etudiant/add';
    return this.http.post<any>(url, student); // 'student' is the data being sent to the backend
  }
  deleteStudent(student: Etudiant): Observable<any> {  // The return type can be any or specific based on your backend response
    const url = `http://localhost:8081/springProjectTwin2/etudiant/remove/${student.idEtudiant}`;
    return this.http.delete(url);
  }
  updateStudent(student: Etudiant): Observable<any> {
    const url = `http://localhost:8081/springProjectTwin2/etudiant/modify`;
    return this.http.put(url, student);
  }
  
getStudentById(id: number): Observable<Etudiant> {
  const url = `http://localhost:8081/springProjectTwin2/etudiant/retrieve/${id}`;
  return this.http.get<Etudiant>(url);
}

searchEtudiants(cin: string): Observable<Etudiant[]> {
  
  return this.http.get<Etudiant[]>(`${this.apiUrl}/search`, { params: { cin } });
}

}  
