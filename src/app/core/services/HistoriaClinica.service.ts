import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HistoriaClinicaInterface } from '../model/historias-clinicas/historiaClinica';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private API_HISTORIA_CLINICA = "http://localhost:8082/historias-clinicas";

  constructor(private http : HttpClient) {}

  public getAllHistoriasClinicas(): Observable<HistoriaClinicaInterface[]>{
    return this.http.get<HistoriaClinicaInterface[]>(this.API_HISTORIA_CLINICA);
  }

  public getHistoriaClinicaById(id: number): Observable<HistoriaClinicaInterface> {
    const url = `${this.API_HISTORIA_CLINICA}/${id}`;
    return this.http.get<HistoriaClinicaInterface>(url);
  }

  public deleteHistoriaClinica(id: number): Observable<HistoriaClinicaInterface> {
    const url = `${this.API_HISTORIA_CLINICA}/${id}`;
    return this.http.delete<HistoriaClinicaInterface>(url);
  }

  public agregarHistoriaClinica(historiaClinica: HistoriaClinicaInterface): Observable<HistoriaClinicaInterface> {
    return this.http.post<HistoriaClinicaInterface>(this.API_HISTORIA_CLINICA, historiaClinica);
  }
  

}