import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HistoriaClinicaDetallesInterface } from '../model/detalles-historias-clinicas/historiaClinicaDetalles';

@Injectable({
  providedIn: 'root'
})
export class DetalleHistoriaClinicaService {

  private API_DETALLE_HISTORIA_CLINICA = "http://localhost:8082/detalles-historias-clinicas";

  constructor(private http : HttpClient) {}

  public getAllDetalleHistoriasClinicas(): Observable<HistoriaClinicaDetallesInterface[]>{
    return this.http.get<HistoriaClinicaDetallesInterface[]>(this.API_DETALLE_HISTORIA_CLINICA);
  }

  public getDetalleHistoriaClinicaById(id: number): Observable<HistoriaClinicaDetallesInterface> {
    const url = `${this.API_DETALLE_HISTORIA_CLINICA}/${id}`;
    return this.http.get<HistoriaClinicaDetallesInterface>(url);
  }

  public deleteDetalleHistoriaClinica(id: number): Observable<HistoriaClinicaDetallesInterface> {
    const url = `${this.API_DETALLE_HISTORIA_CLINICA}/${id}`;
    return this.http.delete<HistoriaClinicaDetallesInterface>(url);
  }

  public agregarDetalleHistoriaClinica(historiaClinica: HistoriaClinicaDetallesInterface): Observable<HistoriaClinicaDetallesInterface> {
    return this.http.post<HistoriaClinicaDetallesInterface>(this.API_DETALLE_HISTORIA_CLINICA, historiaClinica);
  }
  

}