import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';
  countries: ICountry[] = [];

  constructor(
    private _paisService: PaisService
  ) { }

  activateRegion(region: string): void {
    if (region === this.activeRegion) return;

    this.countries = [];
    this.activeRegion = region;
    this._paisService.searchCountry('region', region)
      .subscribe(countries => this.countries = countries);
  }

  getClassCSS(region: string): string {
    return (region === this.activeRegion) ? 'btn-primary' : 'btn-outline-primary';
  }
}
