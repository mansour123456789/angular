import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public users:Observable<any>;
  user =new User();
public  role:number;
  constructor(private service:UserService,private router :Router) { }

  ngOnInit() {
  }
 

  
  loginUser(){
    
     this.users= this.service.loginuser(this.user);
     this.service.SignIn(this.users);
     this.service.loginuser(this.user).subscribe(
      
      data=> {
        
        console.log(data.role);
       
        console.log(this.service.valide);
        console.log(this.service.valide1);
        console.log(this.service.valide2);
       
        
      /* this.router.navigate(['/'])*/

      /*this.router.navigate(['/'])*/
      },
    
       error=> {console.log("jknkllk")
       alert("les cordonner non valid");
  });
      
     
    }
}
