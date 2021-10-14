import { MyPopupComponent } from './../my-popup/my-popup.component';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-general-nav',
  templateUrl: './general-nav.component.html',
  styleUrls: ['./general-nav.component.css']
})
export class GeneralNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {

  }
    
  openDialog(): void {
    const dialogRef = this.dialog.open(MyPopupComponent, {});

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
