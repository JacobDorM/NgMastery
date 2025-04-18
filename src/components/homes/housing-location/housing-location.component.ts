import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HousingLocation } from './housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
