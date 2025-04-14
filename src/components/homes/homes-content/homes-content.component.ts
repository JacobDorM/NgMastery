import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../../../service/homes/housing.service';

@Component({
  selector: 'app-homes-content',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './homes-content.component.html',
  styleUrl: './homes-content.component.scss',
})
export class HomesContentComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
