import { Component, OnInit, OnDestroy } from '@angular/core';
import { Equipo } from 'src/app/models/equipo';
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TarjetasService } from 'src/app/services/tarjetas.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit, OnDestroy {

  //EQUIPOS
  public equiposObs: Observable<Equipo[]>;
  public equipos: Equipo[] = [];
  subscription: Subscription;
  subscriptionParam: Subscription;

  constructor(public tarjetasService: TarjetasService, private rutaActiva: ActivatedRoute, public globals: GlobalService) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        const año = this.rutaActiva.snapshot.params.año;
        const torneo = this.rutaActiva.snapshot.params.torneo;
        this.equiposObs = this.tarjetasService.getTarjetas(torneo, año);
        this.subscription = this.equiposObs.subscribe(eq => this.equipos = eq);
      }
    );
  }

  editEquipo(equipo: Equipo) {
    this.tarjetasService.selectedEquipo = new Equipo(equipo.id, equipo.nombre, equipo.puntos, equipo.partidosJugados, equipo.partidosGanados, equipo.partidosEmpatados, equipo.partidosPerdidos, equipo.golesAFavor, equipo.golesEnContra, equipo.diferenciaGoles, equipo.grupo, equipo.posicion, equipo.cantAmarillas, equipo.cantRojas, equipo.torneo, equipo.año);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.tarjetasService.selectedEquipo = new Equipo(null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  addTarjetas(form: NgForm) {
    const año = this.rutaActiva.snapshot.params.año;
    const torneo = this.rutaActiva.snapshot.params.torneo;
    this.tarjetasService.putTarjetas(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.equiposObs = this.tarjetasService.getTarjetas(torneo, año);
        this.equiposObs.subscribe(eq => this.equipos = eq);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionParam.unsubscribe();
  }

}
