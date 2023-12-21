// app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaClinicaComponent } from './core/model/historias-clinicas/historia-clinica/historia-clinica.component';
import { AgregarHistoriaComponent } from './core/model/historias-clinicas/agregar-historias/agregar-historia.component';
//import { HistoriaClinicaListComponent } from './historia-clinica-list/historia-clinica-list.component';
//import { HistoriaClinicaAddComponent } from './historia-clinica-add/historia-clinica-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/historias-clinicas', pathMatch: 'full' },
  { path: 'historias-clinicas', component: HistoriaClinicaComponent },
  { path: 'agregar-historia-clinica', component: AgregarHistoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
