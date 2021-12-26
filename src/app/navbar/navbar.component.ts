import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:UserService,private router : Router) { 
    if(sessionStorage.getItem('role')!=undefined && sessionStorage.getItem('role')!=null && sessionStorage.getItem('role')=='1'){
      service.valide=false;
      service.valide1=true;
      service.valide2=false;
    }
  }

  ngOnInit() {
  }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if (this.service.isAdmin()){
      return true;
      }else{
          this.router.navigate(['']);
           return false;
        }
  }

  onLogout(){
    this.service.valide=true;
    this.service.valide1=false;
    this.service.valide2=false;
    this.service.loggedUser="";
    this.service.roles=5;
    sessionStorage.setItem('loggedUser','');
    sessionStorage.setItem('isloggedIn','');
    sessionStorage.setItem('role', '');

  }

}
