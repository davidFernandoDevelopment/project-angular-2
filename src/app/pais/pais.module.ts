import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SearcherComponent } from './components/searcher/searcher.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailCountryComponent,
    TableComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    DetailCountryComponent
  ]
})
export class PaisModule { }
