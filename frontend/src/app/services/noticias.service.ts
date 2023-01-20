import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  API_URI;
  headers: HttpHeaders;


constructor(private http : HttpClient, globalService : GlobalService) {
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

getNoticias(){ 
  return this.http.get<Noticia[]>(`${this.API_URI}/noticias`);
 } 

}