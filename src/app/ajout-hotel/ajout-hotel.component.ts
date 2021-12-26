import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-ajout-hotel',
  templateUrl: './ajout-hotel.component.html',
  styleUrls: ['./ajout-hotel.component.css']
})
export class AjoutHotelComponent implements OnInit {
  hotel =new Hotel();
s:File;
  constructor(private service:HotelService,private router :Router) { }

  ngOnInit() {
    
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
  }

  public onchange(event){
    this.s=event.target.files[0];
  }
  registerhotell(){
    console.log(this.s.name);
  this.hotel.image=this.s.name;
    this.service.registerhotel(this.hotel).subscribe(
      data=> {console.log("nej7t")
         this.router.navigate(['/hotel'])

    /*this.router.navigate(['/'])*/

  },
     error=> {console.log("ghaltaaa"),
     alert("remplir le formuler ou bien les cordoner est exist");}
  
    )
  }






  
}
