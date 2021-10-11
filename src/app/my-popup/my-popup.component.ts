import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-popup',
  templateUrl: './my-popup.component.html',
  styleUrls: ['./my-popup.component.css']
})
export class MyPopupComponent implements OnInit {

  constructor() { }
  columnDefs = [
    {headerName: 'Certificate Name', field: 'cName', sortable: true, filter: true, width: 245 },
    {headerName: 'Certificate Date', field: 'cDate', sortable: true, filter: true, width: 245 },
  ];
  rowData = [
    {
      cName: "A",
      cDate: "21.08.2001"
    },
    {
      cName: "B",
      cDate: "14.04.1993"
    },
    {
      cName: "C",
      cDate: "29.02.1999"
    },
    {
      cName: "D",
      cDate: "03.11.2004"
    },
    {
      cName: "E",
      cDate: "08.06.1989"
    },
  ]
  ngOnInit(): void {
  }
}
