import { Component } from '@angular/core';
import { CommentsComponent } from './comments/comments.component';
// Trigger	Behavior
// on idle	Loads after browser is idle
// on interaction	Loads after user interacts with a specific element
// on viewport	Loads when the content is scrolled into view
// on timer(2000)	Loads after a 2-second delay
// on condition(flag)	Loads when a condition becomes true
@Component({
  selector: 'app-defer',
  template: `
    <div>
      <h1>How I feel about Angular Defer!</h1>
      <!--viewport  Useful for lazy loading expensive components or sections the user might never scroll to. -->
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It
          offers the best developer experience I've ever had. I love that the
          Angular team puts their developers first and takes care to make us
          very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This
          statement comes from my heart and is not at all copied and pasted. In
          fact, I think I'll say these exact same things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the
          coolest deferrable view feature that makes defer loading content the
          easiest and most ergonomic it could possibly be. The Angular community
          is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it
          really is the best community out there.
        </p>
      </article>
      @defer (on viewport) {
      <!-- <app-comments /> -->
      <div style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
        <p style="font-size: 1.2em;">fetched Data</p>
      </div>
      } @placeholder(minimum 3s) {
      <div style="padding: 20px; background: #f0f0f0; border-radius: 8px;">
        <p style="font-size: 1.2em;">⏳ Loading placeholder...</p>
      </div>
      } @loading (minimum 3s) {
      <div style="padding: 20px; background: #e0e0e0; border-radius: 8px;">
        <p style="font-size: 1.2em;">🔄 Loading spinner...</p>
      </div>
      } @error {
      <div style="padding: 20px; background: #ffebee; border-radius: 8px;">
        <p style="font-size: 1.2em;">❌ Something went wrong.</p>
      </div>
      }
    </div>
  `,
  imports: [],
})
export class DeferComponent {}
