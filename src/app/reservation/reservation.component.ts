import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
reservation =new Reservation();
  constructor(private service1:ReservationService,private service:UserService,private service2:ReservationService,private router :ActivatedRoute,private servicee:HotelService,private routerr : Router) { }

  ngOnInit() {
  }
  reservationn(){
    this.service1.resrvationnn(this.reservation).subscribe(
      data=> {console.log(this.reservation)
       

    /*this.router.navigate(['/'])*/

  },
     error=> {console.log("ghaltaaa"),
     alert("remplir le formuler ou bien les cordoner est exist");}
  
    )
  }
}
