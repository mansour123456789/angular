import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
hotel =new Hotel();

  constructor(private httpClient: HttpClient, private router: Router) { }

  private baseURL = "http://localhost:8080/delet";
  
  private baseURLl = "http://localhost:8088/find";

  public registerhotel(hotel: Hotel): Observable<any> {
    
    return this.httpClient.post<any>("http://localhost:8088/hotell", hotel  );
  }

  public showallhotel():Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>("http://localhost:8088/hotel");
  }

  public deleithotel(id:number){
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  public findhotelbyId(id:number):Observable<Hotel> {
    return this.httpClient.get<Hotel>(`${this.baseURLl}/${id}`);
  }


}
