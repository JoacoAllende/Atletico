import { Injectable } from '@angular/core';
import { Partido } from '../models/partido';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Instancia } from '../models/instancia';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class CopaService {

  selectedPartido : Partido;
  API_URI;
  headers: HttpHeaders;

  constructor(private http : HttpClient, globalService : GlobalService) {
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

   getInstancias(copa, to, a){
    return this.http.get<Instancia[]>(`http://${this.API_URI}/copa/${copa}/${to}/${a}`);
   }

   putPartido(copa, to, a, partido: Partido) {
    return this.http.put(`http://${this.API_URI}/copa/${copa}/${to}/${a}`, partido, { headers: this.headers });
  }
}
