import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-consulter-hotel',
  templateUrl: './consulter-hotel.component.html',
  styleUrls: ['./consulter-hotel.component.css']
})
export class ConsulterHotelComponent implements OnInit {
hotels:Hotel[];
  constructor(private service:HotelService,private router : Router) { }

  ngOnInit():void {
this.gethotel();
document.body.scrollTop=0;
document.documentElement.scrollTop=0;
  }


gethotel(){
this.service.showallhotel().subscribe(

data =>{ this.hotels = data;});

}


employeeDetails(id: number){

  this.router.navigate(['detail', id]);
}

updatehotel(id: number){
  this.router.navigate(['updatepage', id]);
}

deletehotel(id: number){
  this.service.deleithotel(id).subscribe( data => {
    this.gethotel();
   
  });

}



}
