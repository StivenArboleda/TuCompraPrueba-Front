import { Component, OnInit } from '@angular/core';
import { HistoriaClinicaService } from '../../../services/HistoriaClinica.service'; // Asegúrate de ajustar la ruta correcta
import { HistoriaClinicaInterface } from '../historiaClinica';

@Component({
  selector: 'app-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {

  historiasClinicas: HistoriaClinicaInterface[] = [];
  historiaSeleccionada: HistoriaClinicaInterface | null = null;
  idHistoria: number = 0;

  constructor(private historiaClinicaService: HistoriaClinicaService) { }

  ngOnInit(): void {
    this.obtenerHistoriasClinicas();
  }

  obtenerHistoriasClinicas() {
    this.historiaClinicaService.getAllHistoriasClinicas().subscribe(
      data => {
        console.log('Datos obtenidos:', data);
        this.historiasClinicas = data;
      },
      error => {
        console.error('Error al obtener historias clínicas', error);
      }
    );

  }

  buscarHistoriaPorId() {
    if (this.idHistoria) {
      this.historiaClinicaService.getHistoriaClinicaById(this.idHistoria).subscribe(
        data => {
          console.log('Historia clínica obtenida:', data);
          this.historiasClinicas = data ? [data] : [];
        },
        error => {
          console.error('Error al obtener la historia clínica', error);
        }
      );
    } else {
      // Si no se ingresa ningún ID, muestra todas las historias
      this.obtenerHistoriasClinicas();
    }
  }

  eliminarHistoria(id: number) {
    this.historiaClinicaService.deleteHistoriaClinica(id).subscribe(
      () => {
        console.log(`Historia clínica con ID ${id} eliminada`);
        // Actualiza la lista de historias después de eliminar
        this.obtenerHistoriasClinicas();
      },
      error => {
        console.error(`Error al eliminar historia clínica con ID ${id}`, error);
      }
    );
  }


  
}
