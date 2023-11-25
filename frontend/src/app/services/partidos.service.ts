import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Partido } from '../models/partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  selectedPartido : Partido;
  API_URI;
  headers: HttpHeaders;

  constructor(private http : HttpClient, globalService : GlobalService) {
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

  getEquiposGrupo(to, a, g){
    return this.http.get<{id: number, nombre: string}[]>(`${this.API_URI}/partidos-equipos-grupo/${to}/${a}/${g}`);
  }

  // postEquipo(to, a, equipo: Equipo){
  //   return this.http.post(`${this.API_URI}/equipos/${to}/${a}`,equipo, { headers: this.headers });
  //  }

  // putEquipo(to, a, equipo: Equipo){
  //   return this.http.put(`${this.API_URI}/equipos/${to}/${a}`,equipo, { headers: this.headers });
  // }

  // deleteEquipo(id){
  //   return this.http.delete(`${this.API_URI}/equipos/${id}`, { headers: this.headers });
  // }
}
