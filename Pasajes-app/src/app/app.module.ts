import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasajerosComponent } from './pasajeros/pasajeros.component';
import { LoginComponent } from './login/login.component';
import { PasajeroService } from './pasajeros/pasajero.service';

import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PasajerosComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PasajeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
