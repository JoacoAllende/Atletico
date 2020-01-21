import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Goleador } from '../models/goleador';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class GoleadorService {

  selectedGoleador : Goleador;
  API_URI;
  headers: HttpHeaders;

  constructor(private http : HttpClient, globalService : GlobalService) {
    this.selectedGoleador = new Goleador(null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

  getGoleadores(to, a){
    return this.http.get<Goleador[]>(`http://${this.API_URI}/goleadores/${to}/${a}`);
   }

   postGoleador(to, a, goleador: Goleador){
    return this.http.post(`http://${this.API_URI}/goleadores/${to}/${a}`,goleador, { headers: this.headers });
   }

   putGoleador(to, a, goleador: Goleador){
    return this.http.put(`http://${this.API_URI}/goleadores/${to}/${a}`,goleador, { headers: this.headers });
}
}
