import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HistoriaClinicaComponent } from './core/model/historias-clinicas/historia-clinica/historia-clinica.component';
import { MascotaComponent } from './core/model/mascotas/mascota/mascota.component';
import { AgregarHistoriaComponent } from './core/model/historias-clinicas/agregar-historias/agregar-historia.component';
import { EditarHistoriaComponent } from './core/model/historias-clinicas/editar-historia/editar-historia.component';
import { HistoriaClinicaDetallesComponent } from './core/model/detalles-historias-clinicas/detalle-historia/detalle-historia.component';
import { AgregarDetalleHistoriaComponent } from './core/model/detalles-historias-clinicas/agregar-detalle-historia/agregar-detalle-historia.component';
import { EditarDetalleHistoriaComponent } from './core/model/detalles-historias-clinicas/editar-detalle-historia/editar-detalle-historia.component';
import { ColaboradorComponent } from './core/model/colaborador/colaborador/colaborador.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HistoriaClinicaComponent,
    MascotaComponent,
    AgregarHistoriaComponent,
    EditarHistoriaComponent,
    HistoriaClinicaDetallesComponent,
    AgregarDetalleHistoriaComponent,
    EditarDetalleHistoriaComponent,
    ColaboradorComponent,
    NavbarComponent
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
