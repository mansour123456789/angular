import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  hotels:Hotel[];
  constructor(private service:HotelService,private router : Router) { }

  ngOnInit() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
      this.service.showallhotel().subscribe(
      
      data =>{ this.hotels = data;});
      document.body.style.backgroundColor="rgb(155, 155, 155)";
     
  }
 
  detail(id:number){
this.router.navigate(['detail', id]);

  }

}
