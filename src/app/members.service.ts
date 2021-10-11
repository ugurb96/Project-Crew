import { Injectable, OnInit } from '@angular/core';
import { RequiredInfo } from 'src/app/model/crew';
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  crew?: RequiredInfo[];
  ngOnInit(): void {
    this.crew = [
      {
        name: "John",
        surname: "Doe",
        nation: "Canadian",
        newTitle: "Captain",
        cName: "A",
        cDate: new Date("08-21-2001")
      },
      {
        name: "Mary",
        surname: "Elizabeth",
        nation: "Australian",
        newTitle: "Engineer",
        cName: "B",
        cDate: new Date("14/04/1993")
      },
      {
        name: "Liz",
        surname: "Smith",
        nation: "Mexican",
        newTitle: "Cooker",
        cName: "C",
        cDate: new Date("29/02/1999")
      },
      {
        name: "Jim",
        surname: "Brown",
        nation: "British",
        newTitle: "Mech",
        cName: "D",
        cDate: new Date("03/11/2004")
      },
      {
        name: "Charles",
        surname: "Kennedy",
        nation: "Colombian",
        newTitle: "Engineer",
        cName: "E",
        cDate: new Date("08/06/1989")
      },
    ]
  }
}
