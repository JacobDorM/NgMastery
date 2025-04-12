import { Component } from '@angular/core';
import { ChildComponent } from '../components/ngTutorial/child.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ChildComponent,RouterLink,RouterOutlet],
  template: `
    <div>
      <app-child
        [childData]="title"
        (incrementCountEvent)="onCountIncrement($event)"
      />
      <div>🐢 all the way Up {{ count }}</div>
    </div>
    <nav>
        <a routerLink="/">Home</a>
        |
        <a routerLink="/comments">Comments</a>
        |
        <a routerLink="/img">Img</a>
        |
        <a routerLink="/defer">Defer</a>
        |
        <a routerLink="/forms">Forms</a>
        </nav>
   <router-outlet />
  `,
})
export class AppComponent {
  title = 'this is a message from parent';
  count: number = 0;
  onCountIncrement(count: number) {
    this.count = count;
  }
}
