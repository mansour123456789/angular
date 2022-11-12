import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Etudiant } from '../Entity/etudiant';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new Etudiant();
  public  x:string;
  constructor(private service:LoginService,private a:AppComponent,private router :Router) { }

  ngOnInit() {
  }


  
  
  loginUser(){
   
    this.service.loginuser(this.user).subscribe(
      
      data=> {
     
        alert("les valid"+this.user.name);
        
     this.router.navigate(['/homme']);
this.a.j=1;
      /*this.router.navigate(['/'])*/
      },
    
       error=> {console.log("jknkllk")
       alert("les cordonner non valid"+this.user);
  });
  }
}
