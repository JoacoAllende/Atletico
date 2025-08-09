import { Component, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Partido } from 'src/app/models/partido';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-partidos-dia',
  templateUrl: './partidos-dia.component.html',
  styleUrl: './partidos-dia.component.css',
  standalone: false,
})
export class PartidosDiaComponent implements OnChanges {
  @Input() torneo!: number;
  @Input() year!: number;
  @Input() selectedDate!: Date;

  readonly panelOpenState = signal(false);
  
  // PARTIDOS
  public partidosObs: Observable<Partido[]>;
  public partidos: Partido[] = [];
  subscription: Subscription;
  subscriptionParam: Subscription;

  constructor(public partidosService: PartidosService, private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.subscriptionParam = this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.fetchPartidos();
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes['year'] && !changes['year'].firstChange) || (changes['selectedDate'] && !changes['selectedDate'].firstChange)) {
      this.fetchPartidos();
    }
  }

  fetchPartidos() {
    const isPandemia = this.year === 2022 && (this.torneo === 3 || this.torneo === 4);
    this.partidosObs = this.partidosService.getPartidos(isPandemia ? this.torneo === 3 ? 0 : 1 : this.torneo, isPandemia ? this.year - 1 : this.year, this.selectedDate.toLocaleDateString('en-CA'));
    this.subscription = this.partidosObs.subscribe(p => this.partidos = p);
  }

  getTorneoLink(): any[] {
    if (this.torneo === 3 && this.year === 2022) {
      return ['/torneo', 0, 2021];
    }
    return ['/torneo', this.torneo, this.year];
  }
}
