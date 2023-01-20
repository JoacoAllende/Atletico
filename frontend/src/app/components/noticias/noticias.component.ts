import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  //PAGINACIÓN
  actualPage : number = 1;

  //NOTICIAS
  public noticiasObs: Observable<Noticia[]>;
  public noticias: Noticia[] = [];
  subscriptionNoticias: Subscription;

  constructor(public noticiasService : NoticiasService, private rutaActiva: ActivatedRoute, public globals : GlobalService) { }

  ngOnInit() {
    this.noticiasObs = this.noticiasService.getNoticias().pipe(map(noticias => noticias.map(not => ({ ...not, url: `../../../assets/imagenes/${not.imagen}.jpg` }))));
    this.subscriptionNoticias = this.noticiasObs.subscribe(not => this.noticias = not);
  }

}
