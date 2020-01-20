import { Injectable } from '@angular/core';
import { Partido } from '../models/partido';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  selectedPartido: Partido;
  API_URI;

  constructor(private http: HttpClient, globalService: GlobalService) {
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
  }

  getGrupos(to, a) {
    return this.http.get<Grupo[]>(`http://${this.API_URI}/grupos/${to}/${a}`);
  }

  putPartido(to, a, partido: Partido) {
    return this.http.put(`http://${this.API_URI}/grupos/${to}/${a}`, partido);
  }
}
