import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../services/global.service';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
export class VallaInvictaService {
  API_URI;
  headers: HttpHeaders;

  constructor(private http : HttpClient, private globalService : GlobalService) {
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

   getEquipos(to, a){
    return this.http.get<Equipo[]>(`http://${this.API_URI}/vallaInvicta/${to}/${a}`, { headers: this.headers });
   }
}