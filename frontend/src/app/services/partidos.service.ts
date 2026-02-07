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
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
  }

  getPartidos(to, a, d){
    return this.http.get<Partido[]>(`${this.API_URI}/partidos-dia/${to}/${a}/${d}`);
  }

  getEquiposGrupo(to, a, g){
    return this.http.get<{id: number, nombre: string}[]>(`${this.API_URI}/partidos-equipos-grupo/${to}/${a}/${g}`);
  }

  getHorarios(){
    return this.http.get<{hora: string}[]>(`${this.API_URI}/partidos-horarios`);
  }

  getCanchas(){
    return this.http.get<{cancha: string}[]>(`${this.API_URI}/partidos-canchas`);
  }

  getInstancias(){
    return this.http.get<{instancia: string}[]>(`${this.API_URI}/partidos-instancias`);
  }

  postPartido(to, a, partido: Partido){
    return this.http.post(`${this.API_URI}/partidos/${to}/${a}`,partido, { headers: this.headers });
   }

  putPartido(to, a, partido: Partido){
    return this.http.put(`${this.API_URI}/partidos/${to}/${a}`,partido, { headers: this.headers });
  }

  deletePartido(id){
    return this.http.delete(`${this.API_URI}/partidos/${id}`, { headers: this.headers });
  }
}
