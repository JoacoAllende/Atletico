import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from 'src/app/models/noticia';
import { GlobalService } from 'src/app/services/global.service';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
    selector: 'app-noticia',
    templateUrl: './noticia.component.html',
    styleUrls: ['./noticia.component.css'],
    standalone: false
})
export class NoticiaComponent implements OnInit {

  subscriptionParam: Subscription;

    //NOTICIAS
    public noticiaObs: Observable<Noticia>;
    public noticia: Noticia = null;
    subscriptionNoticias: Subscription;
    public id: number;
  
    constructor(public noticiasService : NoticiasService, public globals : GlobalService, private rutaActiva: ActivatedRoute, private router: Router) { }
  
    ngOnInit() {
      this.subscriptionParam = this.rutaActiva .params.subscribe(
        (params: Params) => {
          this.id = this.rutaActiva.snapshot.params.id;
          this.noticiaObs = this.noticiasService.getNoticia(this.id).pipe(map(noticia => ({ ...noticia, url: `../../../assets/imagenes/${noticia.imagen}.jpg` }) ));
          this.subscriptionNoticias = this.noticiaObs.subscribe(not => this.noticia = not);
        }
      );
    }

    updateNoticia(form : NgForm) {
      this.noticiasService.putNoticia(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.noticiaObs = this.noticiasService.getNoticia(this.id);
          this.noticiaObs.subscribe(not => this.noticia = not);
        })
    }

    resetForm(form?: NgForm){
      if(form){
        form.reset();
        this.noticiasService.selectedNoticia = new Noticia(null, null, null, null, null, null);
      }
    }

    editNoticia(noticia: Noticia){
      this.noticiasService.selectedNoticia = new Noticia(noticia.id, noticia.titulo, noticia.cuerpo, noticia.imagen, noticia.fecha, noticia.url);
    }
  
    deleteNoticia(id: number){
      if (confirm('Desea eliminar la noticia?')){
        this.noticiasService.deleteNoticia(id)
        .subscribe(res => {
          this.router.navigate(['/inicio']);
        })
      }
    }
  

}
