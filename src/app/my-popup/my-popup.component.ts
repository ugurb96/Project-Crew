import { Component, OnInit } from '@angular/core';
import { sampleData } from '../datasource';
@Component({
  selector: 'app-my-popup',
  templateUrl: './my-popup.component.html',
  styleUrls: ['./my-popup.component.css']
})
export class MyPopupComponent implements OnInit {

  constructor() { }
  rowData?: Object[];
  columnDefs = [
    {headerName: 'Certificate Name', field: 'cName', sortable: true, filter: true, width: 245 },
    {headerName: 'Certificate Date', field: 'cDate', sortable: true, filter: true, width: 245 },
  ];

  ngOnInit(): void {
    this.rowData = sampleData;
  }
}
