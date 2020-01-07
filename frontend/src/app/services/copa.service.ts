import { Injectable } from '@angular/core';
import { Partido } from '../models/partido';
import { HttpClient } from '@angular/common/http';
import { Instancia } from '../models/instancia';

@Injectable({
  providedIn: 'root'
})
export class CopaService {

  selectedPartido : Partido;
  API_URI = "localhost:3000";

  constructor(private http : HttpClient) {
    this.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
   }

   getInstancias(copa, to, a){
    return this.http.get<Instancia[]>(`http://${this.API_URI}/copa/${copa}/${to}/${a}`);
   }
}
