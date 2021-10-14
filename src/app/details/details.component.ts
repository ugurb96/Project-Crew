import { ShareIdService } from './../share-id.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sampleData } from '../datasource';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  rowData?: any;
  selectedObject?: Object;
  id?: number;
  columnDefs = [
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 220 },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 220 },
    {headerName: 'Nationality', field: 'nation', sortable: true, filter: true, width: 220 },
    {headerName: 'Title', field: 'newTitle', sortable: true, filter: true, width: 220 },
    {headerName: 'Certificate Name', field: 'cName', sortable: true, filter: true, width: 220 },
    {headerName: 'Certificate Date', field: 'cDate', sortable: true, filter: true, width: 220 },
  ];
  constructor(private activatedRoute: ActivatedRoute, private idService: ShareIdService){
  }
  ngOnInit(): void {
    // this part is to get id from url
    this.activatedRoute.params.subscribe(p => {
      this.id = p['id'];
      this.rowData = sampleData.filter(x => x.id == this.id);     
    })
  }
}
