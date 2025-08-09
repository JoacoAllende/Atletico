import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
  standalone: false
})
export class BackButtonComponent {
  isHome = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHome = this.router.url === '/inicio';
    });
  }

  goHome() {
    this.router.navigate(['/inicio']);
  }
}
