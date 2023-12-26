import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleHistoriaClinicaService } from '../../../services/DetalleHistoriaClinica.service'
import { ColaboradorSerivce } from 'src/app/core/services/Colaborador.service';
import { HistoriaClinicaService } from '../../../services/HistoriaClinica.service'; // Asegúrate de ajustar la ruta correcta
import { HistoriaClinicaInterface } from '../../historias-clinicas/historiaClinica';

@Component({
  selector: 'app-agregar-detalle-historia',
  templateUrl: './agregar-detalle-historia.component.html',
  styleUrls: ['./agregar-detalle-historia.component.css']
})
export class AgregarDetalleHistoriaComponent implements OnInit {

  colaboradores: any[];
  idColaborador: number;
  colaboradorSeleccionado: any = {};

  idHistoria: number = 0;
  historiasClinicas: HistoriaClinicaInterface[] = [];

  detalleHistoriaClinica: any = {
    historiaClinica: {
      id: 0,
      mascota: {
        id: 0,
        nombre: '',
        raza: '',
        usuario: {
          id: 0,
          nombre: '',
          apellido: '',
          tipoDocumento: '',
          documentoIdentificacion: '',
          estado: '',
          sexo: ''
        },
        sexo: ''
      },
      fechaCreacion: ''
    },
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
    }
  };

  constructor(private detalleHistoriaClinicaService: DetalleHistoriaClinicaService,
    private colaboradorService: ColaboradorSerivce,
    private historiaClinicaService: HistoriaClinicaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.colaboradorSeleccionado = {
        id: 0,
        nombre: '',
        apellido: '',
        cargo: '',
        especialidad: '',
        tipoDocumento: '',
        documentoIdentificacion: ''
      }
    }

  ngOnInit(): void {
    this.obtenerColaboradores();
    this.activatedRoute.params.subscribe(params => {
      this.idHistoria = +params['historiaId'];
      this.buscarHistoriaPorId();
    });
  }

  obtenerColaboradores(){
    this.colaboradorService.getAllColaboradores().subscribe(
      data => {
        this.colaboradores = data;
      },
      error => {
        console.error('Error al obtener los colaboradores', error);
      }
    );
  }

  buscarHistoriaPorId() {
    if (this.idHistoria) {
      this.historiaClinicaService.getHistoriaClinicaById(this.idHistoria).subscribe(
        data => {
          console.log('Historia clínica obtenida:', data);
          this.historiasClinicas = data ? [data] : [];
  
          if (data) {
            const historia = data; 

            this.detalleHistoriaClinica.historiaClinica.mascota.nombre = historia.mascota.nombre;
            this.detalleHistoriaClinica.historiaClinica.mascota.raza = historia.mascota.raza;
            this.detalleHistoriaClinica.historiaClinica.mascota.usuario.nombre = historia.mascota.usuario.nombre;
            this.detalleHistoriaClinica.historiaClinica.mascota.usuario.apellido = historia.mascota.usuario.apellido;
            this.detalleHistoriaClinica.historiaClinica.mascota.usuario.tipoDocumento = historia.mascota.usuario.tipoDocumento;
  
            console.log('Detalle de historia clínica actualizado:', this.detalleHistoriaClinica);
          }
        },
        error => {
          console.error('Error al obtener la historia clínica', error);
        }
      );
    }
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

  agregarDetalle(detalleForm: NgForm): void {

    const detalleEnviar = {
      temperatura: this.detalleHistoriaClinica.temperatura,
      peso: this.detalleHistoriaClinica.peso,
      frecuenciaCardiaca: this.detalleHistoriaClinica.frecuenciaCardiaca,
      frecuenciaRespiratoria: this.detalleHistoriaClinica.frecuenciaRespiratoria,
      fechaHora: this.detalleHistoriaClinica.fechaHora,
      alimentacion: this.detalleHistoriaClinica.alimentacion,
      habitad: this.detalleHistoriaClinica.habitad,
      observacion: this.detalleHistoriaClinica.observacion,
      colaborador: {
        id: this.detalleHistoriaClinica.colaborador.id
      },
      historiaClinica: {
        id: this.idHistoria
      }
    };
  
    console.log('Objeto JSON que se enviará:', detalleEnviar);

    this.detalleHistoriaClinicaService.agregarDetalleHistoriaClinica(detalleEnviar).subscribe(
      (resultado) => {
        console.log('Detalle de historia clínica agregado con éxito:', resultado);
        window.alert('Cambios guardados correctamente');
        this.router.navigate(['/detalles-historias-clinicas']);
      },
      (error) => {
        console.error('Error al agregar el detalle de historia clínica:', error);
      }
    );
  }
  
  
}
