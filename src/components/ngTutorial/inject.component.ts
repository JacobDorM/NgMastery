import { Component, inject } from '@angular/core';
import { CarService } from '../../service/ngTutorial/car.service';

@Component({
  selector: 'app-inject',
  template: `
    <div>
      <!-- not recommended practice because it renders on every change detected -->
      <p>{{ carService.getCars() }}</p>
      <!-- recommended practice becuase it renders on initialization -->
      <p>{{ display }}</p>
    </div>
  `,
})
export class InjectComponent {
  display = '';
  // Info: inject-based
  carService = inject(CarService);
  //   Info: Constructor-based
  constructor(private carService2: CarService) {
    this.display = this.carService2.getCars().join(' ⭐️ ');
  }
}
