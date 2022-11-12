import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Club } from '../Entity/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private httpClient: HttpClient, private router: Router) { }




  public demande(club: Club): Observable<any> {
    
    return this.httpClient.post<any>("http://localhost:8088/saveClub", club  );
  }
}
