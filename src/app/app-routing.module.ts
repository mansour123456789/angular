import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HommeComponent } from './homme/homme.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelComponent } from './hotel/hotel.component';
import { RegisterComponent } from './register/register.component';
import { AjoutHotelComponent } from './ajout-hotel/ajout-hotel.component';
import { ConsulterHotelComponent } from './consulter-hotel/consulter-hotel.component';




const Routes:Routes=[
  {path:"",component:HommeComponent},
  {path:"hotel",component:HotelComponent},
  {path:"connect",component:LoginComponent},
  {path:"detail",component:HotelDetailComponent},
  {path:"ajouter",component:AjoutHotelComponent},
  {path:"register",component:RegisterComponent},
  {path:"consulter",component:ConsulterHotelComponent},


];

@NgModule({
  
  imports: [RouterModule.forRoot(Routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
