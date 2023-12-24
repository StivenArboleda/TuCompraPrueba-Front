import { Component, Input, OnInit } from '@angular/core';
import { HistoriaClinicaDetallesInterface } from '../historiaClinicaDetalles';
import { DetalleHistoriaClinicaService } from '../../../services/DetalleHistoriaClinica.service'

@Component({
  selector: 'app-historia-clinica-detalles',
  templateUrl: './detalle-historia.component.html',
  styleUrls: ['./detalle-historia.component.css'] 
})
export class HistoriaClinicaDetallesComponent implements OnInit {

  historiaClinicaDetalles: HistoriaClinicaDetallesInterface[] = [];
  idDetalleHistoria: number = 0;



  constructor(private detalleHistoriaClinica: DetalleHistoriaClinicaService) { }

  ngOnInit(): void {
    this.obtenerDetallesHistoriasClinicas();
  }

  obtenerDetallesHistoriasClinicas(){
    this.detalleHistoriaClinica.getAllDetalleHistoriasClinicas().subscribe(
      data =>{
        console.log('Datoa obtenidos: ', data);
        this.historiaClinicaDetalles = data;
      },
      error => {
        console.error('Error al obtener historias clínicas', error);
      }
    );
  }

  buscarDetalleHistoriaPorId() {
    if (this.idDetalleHistoria) {
      this.detalleHistoriaClinica.getDetalleHistoriaClinicaById(this.idDetalleHistoria).subscribe(
        data => {
          console.log('Historia clínica obtenida:', data);
          this.historiaClinicaDetalles = data ? [data] : [];
        },
        error => {
          console.error('Error al obtener la historia clínica', error);
        }
      );
    } else {
      // Si no se ingresa ningún ID, muestra todas las historias
      this.obtenerDetallesHistoriasClinicas();
    }
  }

  eliminarDetalleHistoria(id: number){
    this.detalleHistoriaClinica.deleteDetalleHistoriaClinica(id).subscribe(
      () => {
        console.log(`Detalle historia clínica con ID ${id} eliminada`);

        this.obtenerDetallesHistoriasClinicas();
      },
      error => {
        console.error(`Error al eliminar detalle historia clínica con ID ${id}`, error);
      }
    );
  }
}
