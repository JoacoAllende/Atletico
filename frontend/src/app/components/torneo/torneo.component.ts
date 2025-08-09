import { Component, signal } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-torneo',
  templateUrl: './torneo.component.html',
  styleUrl: './torneo.component.css',
  standalone: false
})
export class TorneoComponent {
  mostrarCopaOro = true;
  mostrarCopaPlata = true;
  
  constructor(public globals: GlobalService) { }

  readonly panelOpenState = signal(false);

}
