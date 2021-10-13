import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private _httpClient: HttpClient
  ) { }

  searchCountry(type: string, value: string): Observable<ICountry[]> {
    const params = new HttpParams()
      .set('fields', 'name,capital,flags,cca2,cca3,translations,population');

    const url: string = `${this.apiUrl}/${type}/${value}`;
    return this._httpClient.get<ICountry[]>(url, { params });
  }

}
