import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Project-Crew";
  // @ViewChild('agGrid', { static: false }) agGrid?: AgGridAngular;
  columnDefs = [
    {headerName: 'Color', field: 'color', sortable: true, filter: true, width: 660 },
    {headerName: 'Code', field: 'code', sortable: true, filter: true, width: 660 },
  ];

  rowData = [
    {
      color: "red",
      code: "#f00"
    },
    {
      color: "green",
      code: "#0f0"
    },
    {
      color: "blue",
      code: "#00f"
    },
    {
      color: "cyan",
      code: "#0ff"
    },
    {
      color: "magenta",
      code: "#f0f"
    },
    {
      color: "yellow",
      code: "#ff0"
    },
    {
      color: "black",
      code: "#000"
    }
  ]
  // getSelectedItem(){
  //   const selectedNodes = this.agGrid?.api.getSelectedNodes();
  //   const selectedData = selectedNodes?.map(node => node.data);
  //   const selectedDataPresentation = selectedData?.map(node => node.make + ' ' + node.model).join(", ");
  //   alert(`Selected Nodes : ${selectedDataPresentation}`);
  // }
}
