import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <nav>
      <a routerLink="/ngMastery">NgMastery</a>
      |
      <a routerLink="/homes">Homes</a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {
  constructor() {
    // You'll need to implement route detection logic here
  }
}
