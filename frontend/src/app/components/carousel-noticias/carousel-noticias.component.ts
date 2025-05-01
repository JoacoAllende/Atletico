import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
export class CarouselNoticiasComponent implements OnInit, OnDestroy, AfterViewInit {
  public noticiasObs: Observable<Noticia[]>;
  public noticias: Noticia[] = [];

  public noticiasDesktop: Noticia[][] = []; // agrupadas de a 6
  public noticiasMobile: Noticia[][] = [];  // agrupadas de a 4

  private subscriptionNoticias: Subscription;

  constructor(public noticiasService: NoticiasService) {}

  ngOnInit() {
    this.noticiasObs = this.noticiasService.getNoticias().pipe(
      map(noticias =>
        noticias.map(not => ({
          ...not,
          url: `../../../assets/imagenes/${not.imagen}.jpg`
        }))
      )
    );

    this.subscriptionNoticias = this.noticiasObs.subscribe(noticias => {
      this.noticias = noticias;
      this.noticiasDesktop = this.chunkArray(noticias, 6);
      this.noticiasMobile = this.chunkArray(noticias, 4);
    });
  }

  private chunkArray(arr: Noticia[], size: number): Noticia[][] {
    const result: Noticia[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  ngAfterViewInit() {
    const swiperElement = document.querySelector('swiper-container');

    if (swiperElement) {
      const shadowRoot = swiperElement.shadowRoot;
      if (shadowRoot) {
        const swiperWrapper = shadowRoot.querySelector('.swiper-wrapper');
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
