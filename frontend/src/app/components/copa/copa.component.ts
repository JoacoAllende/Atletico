import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Instancia } from 'src/app/models/instancia';
import { CopaService } from 'src/app/services/copa.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-copa',
  templateUrl: './copa.component.html',
  styleUrls: ['./copa.component.css']
})
export class CopaComponent implements OnInit {

  //INSTANCIAS
  public copaObs: Observable<Instancia[]>;
  public copa: Instancia[] = [];

  constructor(public copaService : CopaService, private rutaActiva : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        const año = this.rutaActiva.snapshot.params.año;
        const torneo = this.rutaActiva.snapshot.params.torneo;
        const copa = this.router.url.split('/')[2];
        this.copaObs = this.copaService.getInstancias(copa, torneo, año);
        this.copaObs.subscribe(cp => this.copa = cp);
      }
    );
  }

}
