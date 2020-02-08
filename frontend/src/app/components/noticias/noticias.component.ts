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
      titulo: 'SE REALIZÓ EL SORTEO DE ZONAS DEL TORNEO NACIONAL DE FUTBOL INFANTIL!!!',
      cuerpo: 'El pasado 8 de febrero desde las 20hs, se desarrolló el sorteo del Torneo Nacional sub-12 y del Torneo Paralelo sub-10 en nuestro salón que posee nuestra institución, por lo que quedaron definidos los grupos en ambas categorías. En estos días se publicará el cronograma de los partidos con las canchas y horarios correspondientes.',
      url: '../../../assets/imagenes/Noticia3.jpg',
      fecha: new Date(2020,1,8)
    },
    {
      titulo: 'TRISTE NOTICIA',
      cuerpo: 'Es difícil incorporar noticias que no quisiéramos compartir y que nos han sorprendido tristemente. El trágico fallecimiento de Nicolás Trabella en estas últimas horas, quien venía entrenando con el plantel 2007, con sus escasos 12 años para jugar el XVII Torneo Nacional de Fútbol Infantil. Sus compañeros y profes están intentando superar el duelo porque hay que continuar. La familia albirroja acompaña a la famila Trabella en este difícil momento.',
      url: '../../../assets/imagenes/Noticia2.jpg',
      fecha: new Date(2020,1,5)
    },
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
