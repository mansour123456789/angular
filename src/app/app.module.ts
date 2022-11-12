import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HommeComponent } from './homme/homme.component';
import { ListpresedantComponent } from './listpresedant/listpresedant.component';
import { MessageComponent } from './message/message.component';
import { DateeventComponent } from './dateevent/dateevent.component';
import { FormAjoutClubComponent } from './form-ajout-club/form-ajout-club.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HommeComponent,
    ListpresedantComponent,
    MessageComponent,
    DateeventComponent,
    FormAjoutClubComponent,
    RegisterComponent,
   
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
