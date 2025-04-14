import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  styleUrl: './app.component.scss',
  template: `
    <nav class="apps-bar">
      <a routerLink="/ngTutorial">ngTutorial</a>
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
