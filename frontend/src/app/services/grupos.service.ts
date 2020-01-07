import { Injectable } from '@angular/core';
import { Partido } from '../models/partido';
import { HttpClient } from '@angular/common/http';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  selectedPartido : Partido;
  API_URI = "localhost:3000";

  constructor(private http : HttpClient) { 
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
   }

  getGrupos(to, a) {
    return this.http.get<Grupo[]>(`http://${this.API_URI}/grupos/${to}/${a}`);
  }
}
