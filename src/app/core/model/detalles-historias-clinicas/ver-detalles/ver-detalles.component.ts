import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaClinicaDetallesInterface } from '../historiaClinicaDetalles';
import { DetalleHistoriaClinicaService } from '../../../services/DetalleHistoriaClinica.service';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css']
})
export class VerDetallesComponent implements OnInit {

  idDetalleHistoria: number = 0;
  historiaClinicaDetalles: HistoriaClinicaDetallesInterface = {
    id: 0,
    temperatura: 0,
    peso: 0,
    frecuenciaCardiaca: 0,
    frecuenciaRespiratoria: 0,
    fechaHora: '',
    alimentacion: '',
    habitad: '',
    observacion: '',
    colaborador: {
      id: 0,
      nombre: '',
      apellido: '',
      cargo: '',
      especialidad: '',
      tipoDocumento: '',
      documentoIdentificacion: ''
    },
    historiaClinica: {
      id: 0,
      mascota: {
        id: 0,
        nombre: '',
        raza: '',
        sexo: '',
        usuario: {
          id: 0,
          nombre: '',
          apellido: '',
          tipoDocumento: '',
          documentoIdentificacion: '',
          estado: '',
          sexo: ''
        }
      },
      fechaCreacion: ''
    }
  };

  constructor(
    private detalleHistoriaClinica: DetalleHistoriaClinicaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idDetalleHistoria = +params['detalleHistoriaId'];
      console.log('ID de historia recibido:', this.idDetalleHistoria);
      this.buscarDetalleHistoriaIndividual();
    });
  }

  buscarDetalleHistoriaIndividual() {
    if (this.idDetalleHistoria) {
      this.detalleHistoriaClinica.getDetalleIndividual(this.idDetalleHistoria).subscribe(
        data => {
          console.log('Detalle de historia clínica obtenida:', data);
          this.historiaClinicaDetalles = data;
        },
        error => {
          console.error('Error al obtener la historia clínica', error);
        }
      );
    }
  }
  
}
