import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Equipo } from '../models/equipo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  selectedEquipo: Equipo;
  API_URI;
  headers: HttpHeaders;

  constructor(private http: HttpClient, private globalService: GlobalService) {
    this.selectedEquipo = new Equipo(null, null, null, null, null, null, null, null, null, null, null, null, null, null)
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
  }

  getTarjetas(to, a) {
    return this.http.get<Equipo[]>(`${this.API_URI}/tarjetas/${to}/${a}`, { headers: this.headers });
  }

  putTarjetas(to, a, equipo: Equipo) {
    return this.http.put(`${this.API_URI}/tarjetas/${to}/${a}`, equipo, { headers: this.headers });
  }
}