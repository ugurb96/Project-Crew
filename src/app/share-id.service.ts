import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareIdService {
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  public item?: any;

  constructor() {
      this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data:any) {
      console.log(data);
      this.myMethodSubject.next(data);
      this.item = data;
  }
}
