import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sampleData } from '../datasource';
import { ShareIdService } from '../share-id.service';
@Component({
  selector: 'app-my-popup',
  templateUrl: './my-popup.component.html',
  styleUrls: ['./my-popup.component.css']
})
export class MyPopupComponent implements OnInit {
  data?: any;
  constructor(private activatedRoute: ActivatedRoute, private service: ShareIdService){

  }
  rowData?: Object[];
  columnDefs = [
    {headerName: 'Certificate Name', field: 'cName', sortable: true, filter: true, width: 245 },
    {headerName: 'Certificate Date', field: 'cDate', sortable: true, filter: true, width: 245 },
  ];

  ngOnInit(): void {
    this.data = this.service.item;
    console.log(this.data);
    this.rowData = sampleData.filter(x => x.id == this.data);
  }
}
