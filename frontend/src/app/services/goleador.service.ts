import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goleador } from '../models/goleador';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class GoleadorService {

  selectedGoleador : Goleador;
  API_URI;

  constructor(private http : HttpClient, globalService : GlobalService) {
    this.selectedGoleador = new Goleador(null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
   }

  getGoleadores(to, a){
    return this.http.get<Goleador[]>(`http://${this.API_URI}/goleadores/${to}/${a}`);
   }
}
