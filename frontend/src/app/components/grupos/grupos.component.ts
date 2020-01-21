import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GruposService } from 'src/app/services/grupos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';
import { Partido } from 'src/app/models/partido';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  //GRUPOS
  public gruposObs: Observable<Grupo[]>;
  public grupos: Grupo[] = [];
  //PAGINACIÓN
  actualPage: number = 1;

  constructor(private gruposService: GruposService, private rutaActiva: ActivatedRoute, public globals: GlobalService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.gruposObs = this.gruposService.getGrupos(torneo, año);
        this.gruposObs.subscribe(gr => this.grupos = gr);
      }
    );
  }

  editForm(partido: Partido) {
    this.gruposService.selectedPartido = new Partido(partido.id_partido, partido.id_equipoUno, partido.id_equipoDos, partido.golesLocal, partido.golesVisitante, partido.penalesLocal, partido.penalesVisitante, partido.id_grupo, partido.instancia, partido.equipoUno, partido.equipoDos, partido.torneo, partido.anio);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.gruposService.selectedPartido = new Partido(null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
  }

  editPartido(torneo, año, form: NgForm) {
    this.gruposService.putPartido(torneo, año, form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.gruposObs = this.gruposService.getGrupos(torneo, año);
        this.gruposObs.subscribe(grup => this.grupos = grup);
      })
  }
}
