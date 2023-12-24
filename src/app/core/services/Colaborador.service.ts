import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColaboradorInterface } from '../model/colaborador/colaborador';

@Injectable({
    providedIn: 'root'
})

export class ColaboradorSerivce{

    private API_COLABORADOR = "http://localhost:8082/colaboradores";

    constructor(private http : HttpClient) {}

    public getAllColaboradores(): Observable<ColaboradorInterface[]>{
        return this.http.get<ColaboradorInterface[]>(this.API_COLABORADOR);
      }
    
      public getColaboradorById(id: number): Observable<ColaboradorInterface> {
        const url = `${this.API_COLABORADOR}/${id}`;
        return this.http.get<ColaboradorInterface>(url);
      }
    
      public deleteColaborador(id: number): Observable<ColaboradorInterface> {
        const url = `${this.API_COLABORADOR}/${id}`;
        return this.http.delete<ColaboradorInterface>(url);
      }
      
      public addColaborador(colaborador: ColaboradorInterface): Observable<ColaboradorInterface> {
        return this.http.post<ColaboradorInterface>(this.API_COLABORADOR, colaborador);
      }

}