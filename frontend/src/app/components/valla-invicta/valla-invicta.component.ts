import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from 'src/app/models/equipo';
import { VallaInvictaService } from 'src/app/services/valla-invicta.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-valla-invicta',
  templateUrl: './valla-invicta.component.html',
  styleUrls: ['./valla-invicta.component.css']
})
export class VallaInvictaComponent implements OnInit {

  //EQUIPOS
  public equiposObs: Observable<Equipo[]>;
  public equipos: Equipo[] = [];

  constructor(private vallaInvictaService: VallaInvictaService, private rutaActiva: ActivatedRoute, public globals: GlobalService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        let año = this.rutaActiva.snapshot.params.año;
        let torneo = this.rutaActiva.snapshot.params.torneo;
        this.equiposObs = this.vallaInvictaService.getEquipos(torneo, año);
        this.equiposObs.subscribe(eq => this.equipos = eq);
      }
    );
  }

}
