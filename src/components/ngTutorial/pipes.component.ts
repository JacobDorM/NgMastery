import { Component } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ReversePipe } from '../../pipe/reserve.pipe';

@Component({
  selector: 'app-pipe',
  template: ` <div>
    <p>{{ username | lowercase }}</p>
    <p>{{ username | uppercase }}</p>
    <ul>
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
      <li>Reverse Machine: {{ word | reverse }}</li>
    </ul>
  </div>`,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
    ReversePipe,
  ],
})
export class PipesComponent {
  word = 'You are a champion';
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
