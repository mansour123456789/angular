import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public test: Observable<any>;
  public user = new User();
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  public roles: number;
  public valide: boolean = true;
  public valide1: boolean = false;
  public valide2: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) { }




  public loginuser(User: User): Observable<any> {

    return this.httpClient.post<User>("http://localhost:8088/login", User);
  }





  public register(User: User): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8088/register", User)
  }

  
  
  
  
  
  public SignIn(user: Observable<any>): number {

    let validUser: number;

    user.forEach((curUser) => {
      if (curUser.role == 1) {
        console.log("d5kjsvnfdknbkfnkbnfdlknb");
        validUser = 1;
        this.loggedUser = curUser.name;
        this.isloggedIn = true;
        this.roles = 1;
        sessionStorage.setItem('loggedUser', this.loggedUser);
        sessionStorage.setItem('isloggedIn', String(this.isloggedIn));
        sessionStorage.setItem('role', '1');
        this.valide = false;
        this.valide1 = true;
        this.valide2 = false;
        this.router.navigate(['/']);
      } else {
        if (curUser.role == 0) {
          validUser = 2;
          this.loggedUser = curUser.name;
          this.isloggedIn = true;
          this.roles = 0;
          sessionStorage.setItem('loggedUser', this.loggedUser);
          sessionStorage.setItem('isloggedIn', String(this.isloggedIn));
          sessionStorage.setItem('role', '0');
          this.valide = false;
          this.valide1 = false;
          this.valide2 = true;
          this.router.navigate(['/']);
        }
      }

    });

    return validUser;
  }



  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    sessionStorage.removeItem('loggedUser');
    sessionStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }


  isAdmin(): Boolean {
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles == 1 ? true : false);

  }

  setLoggedUserFromsessionStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    //    this.getUserRoles(login);
  }


}





