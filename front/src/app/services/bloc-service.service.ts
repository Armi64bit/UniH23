import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bloc } from '../models/bloc.model';
@Injectable({
  providedIn: 'root'
})
export class BlocServiceService {

  
   private baseUrl = 'http://localhost:8081/springProjectTwin2/bloc';

  constructor(private http: HttpClient) { }

  getAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.baseUrl}/all-blocs`);
  }
}
