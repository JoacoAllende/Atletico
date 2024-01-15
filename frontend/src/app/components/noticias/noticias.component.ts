import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { GlobalService } from 'src/app/services/global.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

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

  constructor(public noticiasService : NoticiasService, public globals : GlobalService) { }

  ngOnInit() {
    this.noticiasObs = this.noticiasService.getNoticias().pipe(map(noticias => noticias.map(not => ({ ...not, url: `../../../assets/imagenes/${not.imagen}.jpg` }))));
    this.subscriptionNoticias = this.noticiasObs.subscribe(not => this.noticias = not);
  }

  addNoticia(form : NgForm){
    if (form.value.id == null){
      this.noticiasService.postNoticia(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.noticiasObs = this.noticiasService.getNoticias();
        this.noticiasObs.subscribe(not => this.noticias = not);
      })
    }
    else {
      this.noticiasService.putNoticia(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.noticiasObs = this.noticiasService.getNoticias();
        this.noticiasObs.subscribe(not => this.noticias = not);
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.noticiasService.selectedNoticia = new Noticia(null, null, null, null, null);
    }
  }

  editNoticia(noticia: Noticia){
    this.noticiasService.selectedNoticia = new Noticia(noticia.id, noticia.titulo, noticia.cuerpo, noticia.imagen, noticia.fecha);
  }

  deleteNoticia(id: number){
    if (confirm('Desea eliminar la noticia?')){
      this.noticiasService.deleteNoticia(id)
      .subscribe(res => {
        this.noticiasObs.subscribe(not => this.noticias = not);
      })
    }
  }

  ngOnDestroy() {
    this.subscriptionNoticias.unsubscribe();
  }

}
