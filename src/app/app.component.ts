import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyPopupComponent } from './my-popup/my-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Project-Crew";
  columnDefs = [
    {headerName: 'First Name', field: 'name', sortable: true, filter: true, width: 330 },
    {headerName: 'Last Name', field: 'surname', sortable: true, filter: true, width: 330 },
    {headerName: 'Nationality', field: 'nation', sortable: true, filter: true, width: 330 },
    {headerName: 'Title', field: 'newTitle', sortable: true, filter: true, width: 330 },
  ];
  rowData = [
    {
      name: "John",
      surname: "Doe",
      nation: "Canadian",
      newTitle: "Captain"
    },
    {
      name: "Mary",
      surname: "Elizabeth",
      nation: "Australian",
      newTitle: "Engineer"
    },
    {
      name: "Liz",
      surname: "Smith",
      nation: "Mexican",
      newTitle: "Cooker"
    },
    {
      name: "Jim",
      surname: "Brown",
      nation: "British",
      newTitle: "Mech"
    },
    {
      name: "Charles",
      surname: "Kennedy",
      nation: "Colombian",
      newTitle: "Engineer"
    },
  ]
  
  // getSelectedItem(){
  //   const selectedNodes = this.agGrid?.api.getSelectedNodes();
  //   const selectedData = selectedNodes?.map(node => node.data);
  //   const selectedDataPresentation = selectedData?.map(node => node.make + ' ' + node.model).join(", ");
  //   alert(`Selected Nodes : ${selectedDataPresentation}`);
  // }
}
