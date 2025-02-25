import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-torneo',
  templateUrl: './titulo-torneo.component.html',
  styleUrl: './titulo-torneo.component.css',
  standalone: false,
})
export class TituloTorneoComponent {
  @Input() year!: number;
  @Input() torneo!: number;
}
