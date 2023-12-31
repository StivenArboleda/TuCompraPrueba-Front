export interface MascotaInterface {
    id: number;
    nombre: string;
    raza: string;
    sexo: string;
    usuario: {
        id: number;
        nombre: string;
        apellido: string;
        tipoDocumento: string;
        documentoIdentificacion: string;
        estado: string;
        sexo: string;
    };
}
