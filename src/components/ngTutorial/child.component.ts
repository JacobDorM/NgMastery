import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
      <p><strong>Child Component</strong></p>
      <p>Received data: {{ childData }}</p>
      <div>🐢 all the way Down {{ count }}</div>
      <button class="btn" (click)="onClick()">Add Item</button>
    </div>
  `,
})
export class ChildComponent {
  count: number = 0;
  @Input() childData!: string;
  @Output() incrementCountEvent = new EventEmitter<number>();
  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
