export interface HistoriaClinicaDetallesInterface {
    id?: number;
    temperatura: number;
    peso: number;
    frecuenciaCardiaca: number;
    frecuenciaRespiratoria: number;
    fechaHora: string;
    alimentacion: string;
    habitad: string;
    observacion: string;
    colaborador: {
      id: number;
      nombre?: string;
      apellido?: string;
      cargo?: string;
      especialidad?: string;
      tipoDocumento?: string;
      documentoIdentificacion?: string;
    };
    historiaClinica: {
      id: number;
      mascota?: {
        id: number;
        nombre: string;
        raza: string;
        usuario: {
          id: number;
          nombre: string;
          apellido: string;
          tipoDocumento: string;
          documentoIdentificacion: string;
          estado: string;
          sexo: string;
        };
        sexo: string;
      };
      fechaCreacion?: string;
    };
  }
  