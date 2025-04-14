import { Component } from '@angular/core';
import { ChildComponent } from '../../components/ngTutorial/child.component';
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
      <a routerLink="/ngTutorial/comments">Comments</a>
      |
      <a routerLink="/ngTutorial/img">Img</a>
      |
      <a routerLink="/ngTutorial/defer">Defer</a>
      |
      <a routerLink="/ngTutorial/forms">Forms</a>
      |
      <a routerLink="/ngTutorial/inject">Inject</a>
      |
      <a routerLink="/ngTutorial/pipes">Pipes</a>
    </nav>
    <router-outlet />
  `,
})
export class NgTutorialComponent {
  title = 'this is a message from parent';
  count: number = 0;

  onCountIncrement(count: number) {
    this.count = count;
  }
}
