import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) { }
  getReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>('http://localhost:8081/springProjectTwin2/reservation/all');
  }
 
}
