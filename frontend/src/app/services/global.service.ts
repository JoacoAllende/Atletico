import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Contador } from '../models/contador';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  activo : Boolean = false;
  API_URI = 'localhost:3000';

  constructor(private http : HttpClient) { }

  updateContador(contador: Contador){
    return this.http.put(`http://${this.API_URI}/contador`, contador);
  }
}