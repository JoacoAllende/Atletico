import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  selectedEquipo : Equipo;
  API_URI;
  headers: HttpHeaders;

  constructor(private http : HttpClient, globalService : GlobalService) {
    this.selectedEquipo = new Equipo(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

  getEquipos(){
    return this.http.get<{nombre: string}[]>(`${this.API_URI}/equipos`);
  }

  postEquipo(to, a, equipo: Equipo){
    return this.http.post(`${this.API_URI}/equipos/${to}/${a}`,equipo, { headers: this.headers });
   }

  putEquipo(to, a, equipo: Equipo){
    return this.http.put(`${this.API_URI}/equipos/${to}/${a}`,equipo, { headers: this.headers });
  }

  deleteEquipo(id){
    return this.http.delete(`${this.API_URI}/equipos/${id}`, { headers: this.headers });
  }
}
