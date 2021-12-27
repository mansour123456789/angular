import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
name="hotel";
  id: number;
  hotel: Hotel;
  reser:Reservation;

  constructor(private service:UserService,private service2:ReservationService,private router :ActivatedRoute,private servicee:HotelService,private routerr : Router) { }

  ngOnInit() {
    
    this.id = this.router.snapshot.params['id'];
    this.hotel=new Hotel();
    this.servicee.findhotelbyId(this.id).subscribe( data => { this.hotel= data; });
    console.log(this.service.valide);
    console.log(this.service.valide1);
    console.log(this.service.valide2);
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
 
  }


  connect(){
    this.routerr.navigate(['connect']);
  }/*
  reservationn(){

    this.service2.resrvationnn(this.reser).subscribe(
      data=> {console.log("nej7t");
         this.routerr.navigate(['/hotel']);}

   

 ,
     error=> {console.log("ghaltaaa"),
     alert("remplir le formuler ou bien les cordoner est exist");});
  
  
}*/

}
