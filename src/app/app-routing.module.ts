import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaClinicaComponent } from './core/model/historias-clinicas/historia-clinica/historia-clinica.component';
import { AgregarHistoriaComponent } from './core/model/historias-clinicas/agregar-historias/agregar-historia.component';
import { HistoriaClinicaDetallesComponent } from './core/model/detalles-historias-clinicas/detalle-historia/detalle-historia.component';
import { AgregarDetalleHistoriaComponent } from './core/model/detalles-historias-clinicas/agregar-detalle-historia/agregar-detalle-historia.component';
import { VerDetallesComponent } from './core/model/detalles-historias-clinicas/ver-detalles/ver-detalles.component';


const routes: Routes = [
  { path: '', redirectTo: '/historias-clinicas', pathMatch: 'full' },
  { path: 'historias-clinicas', component: HistoriaClinicaComponent },
  { path: 'agregar-historia-clinica', component: AgregarHistoriaComponent },
  { path: 'detalles-historias-clinicas', component: HistoriaClinicaDetallesComponent},
  { path: 'agregar-detalle-historia/:historiaId', component: AgregarDetalleHistoriaComponent},
  { path: 'ver-detalle-historia/:detalleHistoriaId', component: VerDetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
