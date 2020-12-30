import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawInteractionService {
  private subjectDrawLine = new Subject<any>();
  private subjectDrawPolygon = new Subject<any>();
  private subjectDrawOuterRing = new Subject<any>();
  private subjectClear = new Subject<any>();

  sendClickDrawLine(): void {
    this.subjectDrawLine.next();
  }
  getClickDrawLine(): Observable<any>{
    return this.subjectDrawLine.asObservable();
  }

  sendClickDrawPolygon(): void {
    this.subjectDrawPolygon.next();
  }
  getClickDrawPolygon(): Observable<any>{
    return this.subjectDrawPolygon.asObservable();
  }

  sendClickDrawOuterRing(): void {
    this.subjectDrawOuterRing.next();
  }
  getClickDrawOuterRing(): Observable<any>{
    return this.subjectDrawOuterRing.asObservable();
  }

  sendClickClear(): void {
    this.subjectClear.next();
  }
  getClickClear(): Observable<any>{
    return this.subjectClear.asObservable();
  }
}
