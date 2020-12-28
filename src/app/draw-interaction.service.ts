import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawInteractionService {
  private subjectDrawLine = new Subject<any>();
  private subjectDrawPolygon = new Subject<any>();

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
}
