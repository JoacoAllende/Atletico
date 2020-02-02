import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  //PAGINACIÓN
  actualPage : number = 1;

  noticias: Noticia[] = [
    {
      titulo: 'SE PONE EN MARCHA EL XVII TORNEO NACIONAL DE FUTBOL INFANTIL!!!',
      cuerpo: 'El pasado viernes 10 de Enero a las 11hs se realizó una conferencia de prensa en el salón de fiesta del club Atlético Ayacucho, en el cual se lanzó el 17° Torneo Nacional de Fútbol Infantil que estará reservado para las clase 2007 y junto a él, se realizará el Torneo Paralelo para la clase 2009. Cabe mencionar que están confirmadas las presencias de los más prestigiosas instituciones del fútbol de A.F.A. y Nacional de Uruguay. Los esperamos!!!',
      url: '../../../assets/imagenes/Noticia1.jpg',
      fecha: new Date(2020,0,12)
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
