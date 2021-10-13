import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { CountryComponent } from './pais/pages/country/country.component';
import { DetailCountryComponent } from './pais/pages/detail-country/detail-country.component';
import { RegionComponent } from './pais/pages/region/region.component';

const routes: Routes = [
  {
    path: '',
    component: CountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'continent',
    component: RegionComponent
  },
  {
    path: 'country/:id',
    component: DetailCountryComponent
  },
  {
    path: 'capital',
    component: CapitalComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
