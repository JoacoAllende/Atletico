import { Component, OnInit, OnDestroy } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

register(); // 👈 importante: registra los custom elements

@Component({
  selector: 'app-carousel-noticias',
  templateUrl: './carousel-noticias.component.html',
  styleUrls: ['./carousel-noticias.component.css'],
  standalone: false
})
export class CarouselNoticiasComponent implements OnInit, OnDestroy {
  public noticiasObs: Observable<Noticia[]>;
  public noticias: Noticia[] = [];
  private subscriptionNoticias: Subscription;

  constructor(public noticiasService: NoticiasService) {}

  public breakpointsConfig = {
    768: {
      slidesPerView: 8,
      grid: { rows: 2, fill: 'row' }
    }
  };


  ngOnInit() {
    this.noticiasObs = this.noticiasService.getNoticias().pipe(
      map(noticias =>
        noticias.map(not => ({
          ...not,
          url: `../../../assets/imagenes/${not.imagen}.jpg`
        }))
      )
    );

    this.subscriptionNoticias = this.noticiasObs.subscribe(not => this.noticias = not);
  }

  ngAfterViewInit() {
    const swiperElement = document.querySelector('swiper-container');
    
    if (swiperElement) {
      const shadowRoot = swiperElement.shadowRoot;
      if (shadowRoot) {
        const swiperWrapper = shadowRoot.querySelector('.swiper-wrapper');
        console.log(swiperWrapper)
        if (swiperWrapper) {
          (swiperWrapper as HTMLElement).style.paddingBottom = '70px';
        }
      }
    }
  }

  ngOnDestroy() {
    this.subscriptionNoticias.unsubscribe();
  }
}
