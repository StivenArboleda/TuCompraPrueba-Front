import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleHistoriaClinicaService } from '../../../services/DetalleHistoriaClinica.service';
import { ColaboradorSerivce } from '../../../services/Colaborador.service'; 
import { HistoriaClinicaService } from '../../../services/HistoriaClinica.service';

@Component({
  selector: 'app-editar-detalle-historia',
  templateUrl: './editar-detalle-historia.component.html',
  styleUrls: ['./editar-detalle-historia.component.css']
})
export class EditarDetalleHistoriaComponent implements OnInit {

  colaboradores: any[];
  idColaborador: number;
  colaboradorSeleccionado: any = {};

  detalleHistoriaClinica: any = {
    temperatura: 0,
    peso: 0,
    frecuenciaCardiaca: 0,
    frecuenciaRespiratoria: 0,
    fechaHora: '',
    alimentacion: '',
    habitad: '',
    observacion: '',
    colaborador: {
      id: 0
    },
    historiaClinica: {
      id: 0,
      mascota: {
        nombre: '',
        raza: '',
        usuario: {
          nombre: '',
          apellido: '',
          tipoDocumento: '',
        }
      },
    }
  };
  
  idHistoria: number = 0;

  constructor(
    private detalleHistoriaClinicaService: DetalleHistoriaClinicaService,
    private colaboradorService: ColaboradorSerivce,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerColaboradores();
    this.activatedRoute.params.subscribe(params => {
      const idHistoria = +params['id'];
      this.buscarDetallePorId(idHistoria);
    });
  }

  obtenerColaboradores() {
    this.colaboradorService.getAllColaboradores().subscribe(
      data => {
        this.colaboradores = data;
      },
      error => {
        console.error('Error al obtener los colaboradores', error);
      }
    );
  }

  actualizarColaboradorSeleccionado() {
    console.log('Colaboradores:', this.colaboradores);
  
    const colaboradorIdSeleccionado = Number(this.idColaborador);
  
    this.colaboradorService.getColaboradorById(colaboradorIdSeleccionado).subscribe(
      colaborador => {
        this.colaboradorSeleccionado = colaborador;
  
        if (this.colaboradorSeleccionado) {
          console.log('Colaborador seleccionado:', this.colaboradorSeleccionado);

          this.detalleHistoriaClinica.colaborador = this.colaboradorSeleccionado;
        } else {
          console.log('Colaborador no encontrado');
        }
      },
      error => {
        console.error('Error al obtener el colaborador', error);
      }
    );
  }

  buscarDetallePorId(id: number) {
    this.detalleHistoriaClinicaService.getDetalleIndividual(id).subscribe(
      detalle => {
        this.detalleHistoriaClinica = detalle;
        console.log(this.detalleHistoriaClinica);
        this.actualizarColaboradorSeleccionado();
      },
      error => {
        console.error('Error al obtener el detalle de historia clínica', error);
      }
    );
  }

  guardarCambios(form: NgForm) {
    // Construir el objeto JSON con los datos del formulario
    const datosFormulario = {
      temperatura: this.detalleHistoriaClinica.temperatura,
      peso: this.detalleHistoriaClinica.peso,
      frecuenciaCardiaca: this.detalleHistoriaClinica.frecuenciaCardiaca,
      frecuenciaRespiratoria: this.detalleHistoriaClinica.frecuenciaRespiratoria,
      fechaHora: this.detalleHistoriaClinica.fechaHora,
      alimentacion: this.detalleHistoriaClinica.alimentacion,
      habitad: this.detalleHistoriaClinica.habitad,
      observacion: this.detalleHistoriaClinica.observacion,
      colaborador: { id: this.detalleHistoriaClinica.colaborador.id },
      historiaClinica: { id: this.detalleHistoriaClinica.historiaClinica.id }
    };

    
    this.detalleHistoriaClinicaService.editarDetalleHistoriaClinica(this.detalleHistoriaClinica.id, datosFormulario).subscribe(
      respuesta => {
        console.log('Detalle de historia clínica editado exitosamente', respuesta);
        
        window.alert('Cambios guardados correctamente');

        this.router.navigate(['/detalles-historias-clinicas']);
      },
      error => {
        console.error('Error al editar detalle de historia clínica', error);

        window.alert('Por favor revise la información cambiada');
      }
    );


  }

}
