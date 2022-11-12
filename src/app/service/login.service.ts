import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant } from '../Entity/etudiant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  
  
  public loginuser(User: Etudiant): Observable<any> {
   
    return this.httpClient.post<Etudiant>("http://localhost:8088/login", User);
  }

  public register(user: Etudiant): Observable<any> {
    
    return this.httpClient.post<any>("http://localhost:8088/register", user  );
  }

}
