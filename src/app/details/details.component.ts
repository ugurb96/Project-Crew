import { Component, HostListener, OnInit } from '@angular/core';
import { sampleData } from '../datasource';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  rowData?: Object[];
  columnDefs = [
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 330 },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 330 },
    {headerName: 'Nationality', field: 'nation', sortable: true, filter: true, width: 330 },
    {headerName: 'Title', field: 'newTitle', sortable: true, filter: true, width: 330 },
  ];
  
  ngOnInit(): void {   
    this.rowData = sampleData;
  }
}
