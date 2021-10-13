import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { ICountry } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  country!: ICountry;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _paisService: PaisService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._paisService.searchCountry('alpha', id)),
        tap(console.log)
      )
      .subscribe((country): ICountry => this.country = country);
    // this._activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this._paisService.searchCountry('alpha', id)
    //       .subscribe(p => {
    //         console.log(p);
    //       });
    //   });

  }

}
