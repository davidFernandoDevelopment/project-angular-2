import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() countries: ICountry[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
