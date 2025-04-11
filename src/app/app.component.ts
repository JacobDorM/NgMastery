// import { RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { ChildComponent } from '../components/ngTutorial/child.component';
import { DeferComponent } from '../components/ngTutorial/defer.component';
import { ImgComponent } from '../components/ngTutorial/comments/imgComponent/img.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, DeferComponent, ImgComponent],
  template: `
    <div>
      <app-child
        [childData]="title"
        (incrementCountEvent)="onCountIncrement($event)"
      />
      <div>🐢 all the way Up {{ count }}</div>
      <app-img />
      <app-defer />
    </div>
  `,
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'this is a message from parent';
  count: number = 0;
  onCountIncrement(count: number) {
    this.count = count;
  }
}
