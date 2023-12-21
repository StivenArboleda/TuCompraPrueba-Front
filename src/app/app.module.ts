import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HistoriaClinicaComponent } from './core/model/historias-clinicas/historia-clinica/historia-clinica.component';
import { MascotaComponent } from './core/model/mascotas/mascota/mascota.component';
import { AgregarHistoriaComponent } from './core/model/historias-clinicas/agregar-historias/agregar-historia.component';



@NgModule({
  declarations: [
    AppComponent,
    HistoriaClinicaComponent,
    MascotaComponent,
    AgregarHistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
