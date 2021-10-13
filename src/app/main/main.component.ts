import { identifierModuleUrl } from '@angular/compiler';
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
  selectedData?: {
    id: number;
    name: string;
    surname: string;
  }
  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true, width: 440, },
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 440, },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 440 },
  ];
  ngOnInit(): void {
    this.rowData = sampleData;
  }

  onRowClicked(event: any) {  
    this.selectedData = event.data;
    console.log(this.selectedData?.id);
  }
}
