import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `
    <ul>
      <li>
        Static Image:
        <img [src]="logoUrlAsset" width="32" height="32" [alt]="logoAlt" />
      </li>
      <li>
        Static Image:
        <img [src]="'/favicon.ico'" [alt]="logoAlt" />
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" />
      </li>
      <li>
        Static Image:
        <img [ngSrc]="logoUrl" width="32" height="32" [alt]="logoAlt" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" width="32" height="32" [alt]="logoAlt" />
      </li>
      <li class="image-container">
        //Container div has 'position: "relative"'
        <img [ngSrc]="logoUrl" [alt]="logoAlt" fill />
      </li>
      <li class="image-container-priority">
        <img
          [ngSrc]="logoUrl"
          height="100"
          width="100"
          priority
          [alt]="logoAlt"
        />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
  styleUrl: './img.component.scss',
  // providers: [provideImageLoader()],
  // // providers: [provideImgixLoader('http://localhost:3000/public')],
})
export class ImgComponent {
  logoUrl = '/favicon.ico';
  logoUrlAsset = 'assets/favicon.ico';
  logoAlt = 'Angular logo';
}
