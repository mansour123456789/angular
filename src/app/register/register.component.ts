import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../Entity/etudiant';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user=new Etudiant();

  constructor(private service:LoginService,private router :Router) { }

  ngOnInit() {
  }

  registerUser(){
   
     
    this.user.image="no-image.jpg";
      this.service.register(this.user).subscribe(
        data=> {console.log("nej7t")
           this.router.navigate(['/'])
  
      /*this.router.navigate(['/'])*/
  
    },
       error=> {console.log("ghaltaaa"),
       alert("remplir le formuler ou bien les cordoner est exist");}
    
      )
    }
  

}
