import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  selectedNoticia : Noticia;
  API_URI;
  headers: HttpHeaders;


constructor(private http : HttpClient, globalService : GlobalService) {
    this.selectedNoticia = new Noticia(null, null, null, null, null);
    this.API_URI = globalService.API_URI;
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("ACCESS_TOKEN"));
   }

getNoticias(){ 
  return this.http.get<Noticia[]>(`${this.API_URI}/noticias`);
 }

getNoticia(id){ 
  return this.http.get<Noticia>(`${this.API_URI}/noticias/${id}`);
 }

postNoticia(noticia: Noticia){
  return this.http.post(`${this.API_URI}/noticias`, noticia, { headers: this.headers });
 }

putNoticia(noticia: Noticia){
  return this.http.put(`${this.API_URI}/noticias`, noticia, { headers: this.headers });
}

deleteNoticia(id){
  return this.http.delete(`${this.API_URI}/noticias/${id}`, { headers: this.headers });
}

}
