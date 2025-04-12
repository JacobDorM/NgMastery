import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <div>
      <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
      </label>
      <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
      <button (click)="popAlert()">Alert with favoriteFramework</button>
      <p>Reactive forms:</p>
      <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
        <label>
          Name
          <input type="text" formControlName="name" />
        </label>
        <label
          >Email
          <input type="email" formControlName="email" />
        </label>
        <button type="submit" onclick="" [disabled]="!profileForm.valid">
          Submit
        </button>
      </form>
      <h2>Profile Form</h2>
      <p>Name: {{ profileForm.value.name }}</p>
      <p>Email: {{ profileForm.value.email }}</p>
    </div>
  `,
})
export class FormsComponent {
  username = 'dor';
  favoriteFramework = '';
  popAlert() {
    alert(this.favoriteFramework);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
    this.profileForm.reset();
  }
}
