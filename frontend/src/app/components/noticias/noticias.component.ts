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
      titulo: 'UN AÑO MÁS!!!',
      cuerpo: 'Finalizó el XVII Torneo Nacional de Fútbol Infantil. El Club Atlético Ayacucho agradece a todos aquellos, que de una manera u otra colaboran para que el torneo se realice con total éxito. Agradece también a todos los equipos participantes, haciendo una mensión especial a Talleres de Córdoba, Andes Talleres de Mendoza y Club Nacional de Futbol de Uruguay, por lo gran cantidad de kilómetros recorridos, lo que engrandece nuestro torneo. La comisión directiva se siente orgullosa por el trabajo realizado. Esperamos el año próximo volver a encontrarnos y contar con la presencia de más equipos.',
      url: '../../../assets/imagenes/Noticia7.jpg',
      fecha: new Date(2020,1,16)
    },
    {
      titulo: 'VELEZ CAMPEON!!!',
      cuerpo: 'El Club Atlético Vélez Sarsfield se consagró campeón del XVII Torneo Nacional de Fútbol Infantil - Ciudad de Ayacucho -, tras vencer 2 a 1 en una final pareja, al Club Atĺético Talleres de Córdoba. En cuanto al torneo paralelo categoría 2009, el campeón fue Gimnasia de Tandil, que venció en los penales 5 a 3 a Alumni Azuleño, luego de empatar en 0 en los 60 minutos reglamentarios de la final. Salud campeones!!',
      url: '../../../assets/imagenes/Noticia6.jpg',
      fecha: new Date(2020,1,16)
    },
    {
      titulo: 'INAUGURACIÓN OFICIAL!!!',
      cuerpo: 'Luego de la postergación por el mal clima del pasado jueves, se realizó la ceremonia inaugural con la presencia de los equipos participantes. En la misma se realizó un homenaje a Nicolás, jugador N°3 del equipo anfitrión, quien perdiera la vida en un accidente días atrás. En un acto muy emotivo, por pedido de sus compañeros y decisión de la comisión directiva, se hizo entrega de su camiseta a la familia, ante un interminable aplauso del público presente, la cual será retirada durante la temporada actual.',
      url: '../../../assets/imagenes/Noticia5.jpg',
      fecha: new Date(2020,1,15)
    },
    {
      titulo: 'POSTERGADA LA INAUGURACIÓN!!!',
      cuerpo: 'Debido a inconevientes climáticos, la ceremonia inaugural se reprogramó para el día viernes a las 19:50 hs. Además, se completarán durante el transcurso de la mañana, aquellos partidos que el clima impidió que se realicen.',
      url: '../../../assets/imagenes/Noticia4.jpg',
      fecha: new Date(2020,1,13)
    },
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
