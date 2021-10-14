import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sampleData } from '../datasource';
import { ShareIdService } from '../share-id.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private service: ShareIdService) { }
  rowData?: Object[];
  data?: number;
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
    this.service.myMethod(this.selectedData?.id);
    this.router.navigateByUrl('/details/' + this.selectedData?.id), {
      queryParam: { 'id': this.selectedData?.id }
    };
  }
}
