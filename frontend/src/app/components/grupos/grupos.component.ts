import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GruposService } from 'src/app/services/grupos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';

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

  constructor(private gruposService: GruposService, private rutaActiva: ActivatedRoute) { }

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


}
