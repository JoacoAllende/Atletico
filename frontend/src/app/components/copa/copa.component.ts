import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Instancia } from 'src/app/models/instancia';
import { CopaService } from 'src/app/services/copa.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Partido } from 'src/app/models/partido';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-copa',
  templateUrl: './copa.component.html',
  styleUrls: ['./copa.component.css']
})
export class CopaComponent implements OnInit, OnDestroy {

  //INSTANCIAS
  public copaObs: Observable<Instancia[]>;
  public copa: Instancia[] = [];
  subscription: Subscription;
  subscriptionParam: Subscription;
  public copaText: String;

  constructor(public copaService : CopaService, private rutaActiva : ActivatedRoute, private router: Router, public globals: GlobalService) { }

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        const año = this.rutaActiva.snapshot.params.año;
        const torneo = this.rutaActiva.snapshot.params.torneo;
        const copa = this.router.url.split('/')[2];
        this.copaText = copa;
        this.copaObs = this.copaService.getInstancias(copa, torneo, año);
        this.subscription = this.copaObs.subscribe(cp => this.copa = cp);
      }
    );
  }

  editForm(partido: Partido) {
    this.copaService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio);
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.copaService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  editPartido(torneo, año, form : NgForm){
    const copa = this.router.url.split('/')[2];
    this.copaService.putPartido(copa, torneo, año, form.value)
    .subscribe(res => {
      this.resetForm(form);
        this.copaObs = this.copaService.getInstancias(copa, torneo, año);
        this.copaObs.subscribe(inst => this.copa = inst);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionParam.unsubscribe();
  }

}
