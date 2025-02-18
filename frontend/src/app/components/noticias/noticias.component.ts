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
    styleUrls: ['./noticias.component.css'],
    standalone: false
})
export class NoticiasComponent implements OnInit {

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
    this.noticiasService.postNoticia(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.noticiasObs = this.noticiasService.getNoticias();
        this.noticiasObs.subscribe(not => this.noticias = not);
      })
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.noticiasService.selectedNoticia = new Noticia(null, null, null, null, null, null);
    }
  }

  ngOnDestroy() {
    this.subscriptionNoticias.unsubscribe();
  }

}
