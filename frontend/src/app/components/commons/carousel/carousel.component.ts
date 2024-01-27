import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 400,
    responsive: {
      0: {
        items: 1
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    // navText: ["<i class='glyphicon glyphicon-arrow-left'>","<i class='glyphicon glyphicon-arrow-right'></i>"],
    lazyLoad: true
  }

}
