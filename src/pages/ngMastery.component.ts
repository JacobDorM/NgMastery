import { Component } from '@angular/core';
import { ChildComponent } from '../components/ngTutorial/child.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ng-mastery',
  standalone: true,
  imports: [ChildComponent, RouterLink, RouterOutlet],
  template: `
    <div>
      <app-child
        [childData]="title"
        (incrementCountEvent)="onCountIncrement($event)"
      />
      <div>🐢 all the way Up {{ count }}</div>
    </div>
    <nav>
      <a routerLink="/ngMastery/comments">Comments</a>
      |
      <a routerLink="/ngMastery/img">Img</a>
      |
      <a routerLink="/ngMastery/defer">Defer</a>
      |
      <a routerLink="/ngMastery/forms">Forms</a>
      |
      <a routerLink="/ngMastery/inject">Inject</a>
      |
      <a routerLink="/ngMastery/pipes">Pipes</a>
    </nav>
    <router-outlet />
  `,
})
export class NgMasteryComponent {
  title = 'this is a message from parent';
  count: number = 0;

  onCountIncrement(count: number) {
    this.count = count;
  }
}
