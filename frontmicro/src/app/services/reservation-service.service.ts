import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }


  constructor(private http: HttpClient) { }
  private baseURL = 'http://localhost:8081/springProjectTwin2/res';

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + '/getAll')
    ;
  }
  getEtudiant(id:any): Observable<any[]>  {
    return this.http.get<any[]>(this.baseURL + '/getEtudiant/' + id)
    ;
  }
  getChambre(idReservation:any): Observable<any>  {
    return this.http.get<any>(this.baseURL + '/getChambre/' + idReservation)

  }
  AddData(data: any): Observable<any> {
    return this.http.post(this.baseURL+'/add', data)
  }
  UpdateData(data: any): Observable<any> {
    return this.http.put(this.baseURL+'/update', data)
  }

  deleteRes(idReservation: any): Observable<any> {
    return this.http.delete<any>(this.baseURL + '/del/' + idReservation);
  }

  delete(idChambre: number, idReservation: string): Observable<any> {
    return this.http.delete<any>(this.baseURL + '/deleteChambre2/' + idChambre + '/' + idReservation);
  }

  getEtudiants(): Observable<any[]>  {
    return this.http.get<any[]>('http://localhost:8081/springProjectTwin2/etudiant/all-etudiants');

  }
  affectStudentToReservation(id: any, num: any): Observable<any[]> {
    return this.http.post<any[]>(this.baseURL + '/assignToEtudiant/' + id + '/' + num, {});
  }

  getChambres(): Observable<any[]>  {
    return this.http.get<any[]>('http://localhost:8081/springProjectTwin2/chambre/all-chambres');

  }

  affectchambreToReservation(id: any, num: any): Observable<any[]> {
    return this.http.post<any[]>(this.baseURL + '/assignToChambre/' + id + '/' + num, {});
  }
  AddData2(data: any): Observable<any> {
    return this.http.post(this.baseURL+'/addAndAssignToChambre', data)
  }

  getReservations(cin: any): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL + '/getReservations/' + cin)
    ;
  }













}
