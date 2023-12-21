import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MascotaInterface } from '../model/mascotas/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private API_MASCOTAS = "http://localhost:8082/mascotas";

  constructor(private http : HttpClient) {}

  public getAllMascotas(): Observable<MascotaInterface[]>{
    return this.http.get<MascotaInterface[]>(this.API_MASCOTAS);
  }

  public getMascotaById(id: number): Observable<MascotaInterface> {
    const url = `${this.API_MASCOTAS}/${id}`;
    return this.http.get<MascotaInterface>(url);
  }

  public deleteMascota(id: number): Observable<MascotaInterface> {
    const url = `${this.API_MASCOTAS}/${id}`;
    return this.http.delete<MascotaInterface>(url);
  }
  
  public addMascota(mascota: MascotaInterface): Observable<MascotaInterface> {
    return this.http.post<MascotaInterface>(this.API_MASCOTAS, mascota);
  }

}