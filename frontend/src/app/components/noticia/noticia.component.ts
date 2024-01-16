import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from 'src/app/models/noticia';
import { GlobalService } from 'src/app/services/global.service';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  subscriptionParam: Subscription;

    //NOTICIAS
    public noticiaObs: Observable<Noticia>;
    public noticia: Noticia = null;
    subscriptionNoticias: Subscription;
    public id: number;
  
    constructor(public noticiasService : NoticiasService, public globals : GlobalService, private rutaActiva: ActivatedRoute) { }
  
    ngOnInit() {
      this.subscriptionParam = this.rutaActiva .params.subscribe(
        (params: Params) => {
          this.id = this.rutaActiva.snapshot.params.id;
          this.noticiaObs = this.noticiasService.getNoticia(this.id).pipe(map(noticia => ({ ...noticia, url: `../../../assets/imagenes/${noticia.imagen}.jpg` }) ));
          this.subscriptionNoticias = this.noticiaObs.subscribe(not => this.noticia = not);
        }
      );
    }

}
