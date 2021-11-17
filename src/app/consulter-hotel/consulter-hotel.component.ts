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
  }


gethotel(){
this.service.showallhotel().subscribe(

data =>{ this.hotels = data;});

}


employeeDetails(id: number){
  this.router.navigate(['hotel-details', id]);
}

updatehotel(id: number){
  this.router.navigate(['updatepage nbadel feha', id]);
}

deletehotel(id: number){
  this.service.deleithotel(id).subscribe( data => {
    console.log(data);
    this.gethotel();
  })
}



}
