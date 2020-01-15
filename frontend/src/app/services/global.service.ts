import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  public activo: string = localStorage.getItem("activateUser");
  API_URI = 'localhost:3000';

  constructor() { }
}