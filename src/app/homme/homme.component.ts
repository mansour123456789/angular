import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-homme',
  templateUrl: './homme.component.html',
  styleUrls: ['./homme.component.css']
})
export class HommeComponent implements OnInit {
  hotels:Hotel[];
  hotelss:Hotel;
  j=2;
  constructor(private service:HotelService,private router : Router) { }

  ngOnInit() {
    this.service.showallhotel().subscribe(
      
      data =>{ this.hotels = data;});
  
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0; 
      
  }
  detail(id:number){
    this.router.navigate(['detail', id]);
  }
}