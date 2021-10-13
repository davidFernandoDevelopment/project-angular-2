import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  ngTxtSearch: string = "";
  hasError: boolean = false;
  countries: ICountry[] = [];
  suggestedCountries: ICountry[] = [];
  showSuggested: boolean = false;

  constructor(
    private _paisService: PaisService
  ) { }

  search(txt: string) {
    this.showSuggested = false;
    this.hasError = false;
    this.ngTxtSearch = txt;

    this._paisService
      .searchCountry('name', this.ngTxtSearch)
      .subscribe(
        res => this.countries = res,
        _ => {
          this.hasError = true;
          this.countries = [];
        }
      );
  }
  suggest(txt: string) {
    this.showSuggested = true;
    this.hasError = false;
    this.ngTxtSearch = txt;
    this.suggestedCountries = [];
    this._paisService.searchCountry('name', txt)
      .subscribe(
        (countries: ICountry[]) => this.suggestedCountries = countries.splice(0, 5),
        _ => this.suggestedCountries = []
      );
  }
  searchSuggested(txt: string) {
    this.search(txt);
  }
}
