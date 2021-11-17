import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient: HttpClient, private router: Router) { }



  public registerhotel(hotel: Hotel) {
    return this.httpClient.post<any>("http://localhost:8088/hotel", Hotel)
  }

  public showallhotel():Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>("http://localhost:8088/hotel")
  }

  public deleithotel(id:number){
    return this.httpClient.delete('http://localhost:8088/delet/');
  }
  public findhotelbyId(id:number) {
    return this.httpClient.get("http://localhost:8088/hotel/'id'");
  }


}
