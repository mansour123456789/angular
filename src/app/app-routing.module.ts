import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes ,RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HommeComponent } from './homme/homme.component';
import { ListpresedantComponent } from './listpresedant/listpresedant.component';
import { MessageComponent } from './message/message.component';
import { DateeventComponent } from './dateevent/dateevent.component';
import { FormAjoutClubComponent } from './form-ajout-club/form-ajout-club.component';
import { RegisterComponent } from './register/register.component';

  

const Routes:Routes=[
  {path:"",component:LoginComponent},
  {path:"homme",component:HommeComponent},
  {path:"list",component:ListpresedantComponent},
  {path:"message",component:MessageComponent},
  {path:"date",component:DateeventComponent},
  {path:"ajoute",component:FormAjoutClubComponent},
  {path:"register",component:RegisterComponent},

];

@NgModule({
  
  imports: [RouterModule.forRoot(Routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
