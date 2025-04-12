import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports:[FormsModule],
  template: `
    <div>
    <label for="framework">
        Favorite Framework:
    <input id="framework" type="text"  [(ngModel)]="favoriteFramework"/>
    </label>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    </div>
  `,
})
export class FormsComponent {
  username = 'dor'
   favoriteFramework = ''
}
