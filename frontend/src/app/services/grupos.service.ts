import { Injectable } from '@angular/core';
import { Partido } from '../models/partido';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grupo } from '../models/grupo';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  selectedPartido: Partido;
  API_URI;
  headers: HttpHeaders;

  constructor(private http: HttpClient, globalService: GlobalService) {
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
  }

  getGrupos(to, a) {
    return this.http.get<Grupo[]>(`${this.API_URI}/grupos/${to}/${a}`);
  }

  putPartido(to, a, partido: Partido) {
    return this.http.put(`${this.API_URI}/grupos/${to}/${a}`, partido, { headers: this.headers });
  }
}
