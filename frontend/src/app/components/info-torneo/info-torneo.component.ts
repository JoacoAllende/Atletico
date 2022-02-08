import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-torneo',
  templateUrl: './info-torneo.component.html',
  styleUrls: ['./info-torneo.component.css']
})
export class InfoTorneoComponent implements OnInit {

  subscriptionParam: Subscription;
  public anio: number;
  public torneo: number;

  constructor( private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.anio = this.rutaActiva.snapshot.params.año;
        this.torneo = this.rutaActiva.snapshot.params.torneo;
      }
    );
  }

}
