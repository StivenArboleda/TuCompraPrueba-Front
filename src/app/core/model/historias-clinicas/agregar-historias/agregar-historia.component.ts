import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaClinicaService } from 'src/app/core/services/HistoriaClinica.service';
import { MascotaService } from 'src/app/core/services/Mascota.service';
import { HistoriaClinicaInterface } from '../historiaClinica';

@Component({
  selector: 'app-agregar-historia',
  templateUrl: './agregar-historia.component.html',
  styleUrls: ['./agregar-historia.component.css']
})
export class AgregarHistoriaComponent implements OnInit {

  mascotas: any[] = [];
  idMascota: number;
  fechaCreacion: string;

  mascotaSeleccionada: {
    id: number,
    nombre: string,
    raza: string,
    sexo: string,
    usuario: {
      id: number,
      nombre: string,
      apellido: string,
      tipoDocumento: string,
      documentoIdentificacion: string,
      estado: string,
      sexo: string
    },

  };

  constructor(private mascotaService: MascotaService, 
    private historiaClinicaService: HistoriaClinicaService,
    private router: Router) {
    this.mascotaSeleccionada = {
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
    };
  }

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    this.mascotaService.getAllMascotas().subscribe(
      data => {
        this.mascotas = data;
      },
      error => {
        console.error('Error al obtener las mascotas', error);
      }
    );
  }

  actualizarMascotaSeleccionada() {
    console.log('Mascotas:', this.mascotas);

    this.mascotaService.getMascotaById(this.idMascota).subscribe(
      mascota => {
        this.mascotaSeleccionada = mascota;

        if (this.mascotaSeleccionada) {
          console.log('Mascota seleccionada:', this.mascotaSeleccionada);
        } else {
          console.log('Mascota no encontrada');
        }
      },
      error => {
        console.error('Error al obtener la mascota', error);
      }
    );
  }

  agregarHistoriaClinica() {
    const fechaCreacion = new Date();

    const nuevaHistoriaClinica: HistoriaClinicaInterface = {
      mascota: { id: this.idMascota },
      fechaCreacion: fechaCreacion 
    };

    this.historiaClinicaService.agregarHistoriaClinica(nuevaHistoriaClinica).subscribe(
      (response) => {
        console.log('Historia clínica agregada exitosamente:', response);
        window.alert('Se agregó la nueva historia clínica correctamente.');

        this.router.navigate(['/historias-clinicas']);
      },
      (error) => {
        console.error('Error al agregar historia clínica:', error);
        window.alert('Por favor revise la información a guardar');
      }
    );
  }
  

}
