import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user =new User();
  constructor(private service:UserService,private router :Router) { }

  ngOnInit() {
  }
  register(){
    this.service.register(this.user).subscribe(
      data=> {console.log("nej7t")
         this.router.navigate(['/connect'])

    /*this.router.navigate(['/'])*/

  },
     error=> {console.log("ghaltaaa"),
     alert("remplir le formuler ou bien les cordoner est exist");}
  
    )
  }
 
}
