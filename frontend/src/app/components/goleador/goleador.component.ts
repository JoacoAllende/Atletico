import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Goleador } from 'src/app/models/goleador';
import { GoleadorService } from 'src/app/services/goleador.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goleador',
  templateUrl: './goleador.component.html',
  styleUrls: ['./goleador.component.css']
})
export class GoleadorComponent implements OnInit, OnDestroy {

  //GOLEADORES
  public goleadoresObs: Observable<Goleador[]>;
  public goleadores: Goleador[] = [];
  subscription: Subscription;
  subscriptionParam: Subscription;
  //PAGINACIÓN
  actualPage : number = 1;
  //FILTRO PIPE
  busquedaApellido: string;
  busquedaNombre: string;
  busquedaEquipo: string;

  constructor(public goleadorService : GoleadorService, private rutaActiva: ActivatedRoute, public globals : GlobalService) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.goleadoresObs = this.goleadorService.getGoleadores(torneo, año);
        this.subscription = this.goleadoresObs.subscribe(gol => this.goleadores = gol);
      }
    );
  }

  addGoleador(torneo, año, form : NgForm){
    if (form.value.id == null){
      this.goleadorService.postGoleador(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.goleadoresObs = this.goleadorService.getGoleadores(torneo, año);
        this.goleadoresObs.subscribe(gol => this.goleadores = gol);
      })
    }
    else {
      this.goleadorService.putGoleador(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.goleadoresObs = this.goleadorService.getGoleadores(torneo, año);
        this.goleadoresObs.subscribe(gol => this.goleadores = gol);
      })
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.goleadorService.selectedGoleador = new Goleador(null, null, null, null, null, null, null, null, null);
    }
  }

  editGoleador(goleador: Goleador){
    this.goleadorService.selectedGoleador = new Goleador(goleador.id, goleador.nombre, goleador.apellido, goleador.numero, goleador.goles, goleador.equipo, goleador.torneo, goleador.anio, goleador.id_equipo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionParam.unsubscribe();
  }

}
