import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  id: number
  hotel: Hotel
  constructor(private service:HotelService,private router :Router) { }

  ngOnInit() {
  /*  this.id = this.router.snapshot.params['id'];

    this.hotel = new Hotel();
    this.service.findhotelbyId(this.id).subscribe( data => {
      this.hotel = data;
    });*/
  }

}
