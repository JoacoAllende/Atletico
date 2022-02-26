import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoTorneoService {

  torneo: number;
  año: number;

  constructor() { }
}
