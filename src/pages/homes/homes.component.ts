import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomesContentComponent } from '../../components/homes/homes-content/homes-content.component';

@Component({
  selector: 'app-homes',
  imports: [NgOptimizedImage, RouterModule],
  styleUrl: './homes.component.scss',
  template: `
    <main>
      <header class="brand-name">
        <img
          [routerLink]="['/homes']"
          class="brand-logo"
          [ngSrc]="logoUrl"
          [alt]="logoAlt"
          width="100"
          height="100"
          aria-hidden="true"
        />
      </header>

      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
})
export class HomesComponent {
  logoUrl = '/homes.svg';
  logoAlt = 'Homes Logo';
}
