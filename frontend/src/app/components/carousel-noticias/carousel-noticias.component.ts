import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-carousel-noticias',
  templateUrl: './carousel-noticias.component.html',
  styleUrls: ['./carousel-noticias.component.css']
})
export class CarouselNoticiasComponent implements OnInit {

  //NOTICIAS
  public noticiasObs: Observable<Noticia[]>;
  public noticias: Noticia[] = [];
  subscriptionNoticias: Subscription;

  constructor(public noticiasService : NoticiasService) { }

  ngOnInit() {
    this.noticiasObs = this.noticiasService.getNoticias().pipe(
      map(noticias => noticias.map(not => ({ ...not, url: `../../../assets/imagenes/${not.imagen}.jpg` }))),
      map(noticiasConUrl => noticiasConUrl.slice(3))
    );
    
    this.subscriptionNoticias = this.noticiasObs.subscribe(not => this.noticias = not);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    responsive: {
      0: {
        items: 3
      },
    },
    nav: true,
    autoplay: false,
    autoplayTimeout: 3000,
    navText: ["<i class='glyphicon glyphicon-arrow-left'>","<i class='glyphicon glyphicon-arrow-right'></i>"],
  

  }

  ngOnDestroy() {
    this.subscriptionNoticias.unsubscribe();
  }


}
