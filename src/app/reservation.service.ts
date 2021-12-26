import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  resrvation = new Reservation();
  constructor(private httpClient: HttpClient, private router: Router) { }


  public resrvationnn(resrvation: Reservation): Observable<any> {
    
    return this.httpClient.post<any>("http://localhost:8088/reser", resrvation  );
  }


}
