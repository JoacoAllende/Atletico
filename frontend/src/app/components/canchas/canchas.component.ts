import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-canchas',
    templateUrl: './canchas.component.html',
    styleUrls: ['./canchas.component.css'],
    standalone: false
})
export class CanchasComponent implements OnInit {

  subscriptionParam: Subscription;
  public anio: number;

  constructor( private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.anio = this.rutaActiva.snapshot.params.año;
      }
    );
  }

}
