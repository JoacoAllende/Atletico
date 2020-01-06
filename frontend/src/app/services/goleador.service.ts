import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Goleador } from '../models/goleador';

@Injectable({
  providedIn: 'root'
})
export class GoleadorService {

  selectedGoleador : Goleador;
  API_URI = "localhost:3000";

  constructor(private http : HttpClient) {
    this.selectedGoleador = new Goleador(null, null, null, null, null, null, null, null, null);
   }

  getGoleadores(to, a){
    return this.http.get<Goleador[]>(`http://${this.API_URI}/goleadores/${to}/${a}`);
   }
}
