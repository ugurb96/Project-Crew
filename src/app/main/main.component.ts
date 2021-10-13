import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sampleData } from '../datasource';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }
  rowData?: Object[];
  selectedData?: {
    id: number;
    name: string;
    surname: string;
  }
  columnDefs = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true, width: 440, },
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 440, },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 440 },
  ];
  ngOnInit(): void {
    this.rowData = sampleData;
  }

  onCellClicked(event: any): void {  
    this.selectedData = event.data;
    this.router.navigateByUrl('/details/' + this.selectedData?.id);
  }
}
