import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {

  ngTxtSearch: string = "";
  hasError: boolean = false;
  countries: ICountry[] = [];

  constructor(
    private _paisService: PaisService
  ) { }

  search(txt: string) {
    this.hasError = false;
    this.ngTxtSearch = txt;

    this._paisService
      .searchCountry('capital', this.ngTxtSearch)
      .subscribe(
        res => this.countries = res,
        _ => {
          this.hasError = true;
          this.countries = [];
        }
      );
  }
  suggest(txt: string) {
    this.hasError = false;

  }

}
