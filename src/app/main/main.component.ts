import { Component, OnInit } from '@angular/core';
import { sampleData } from '../datasource';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  rowData?: Object[];
  columnDefs = [
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 660 },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 660 },
  ];
  ngOnInit(): void {
    this.rowData = sampleData;
  }

}
