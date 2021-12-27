import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HommeComponent } from './homme/homme.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ConsulterHotelComponent } from './consulter-hotel/consulter-hotel.component';
import { AjoutHotelComponent } from './ajout-hotel/ajout-hotel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HommeComponent,
    HotelComponent,
    HotelDetailComponent,
   
    LoginComponent,
  
    AdminComponent,
    RegisterComponent,
    ConsulterHotelComponent,
    AjoutHotelComponent,
    NavbarComponent,
    ReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
