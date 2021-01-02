import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawInteractionService {
  private subjectDrawLine = new Subject<any>();
  private subjectDrawPolygon = new Subject<any>();
  private subjectDrawOuterRing = new Subject<any>();
  private subjectDrawRunLine = new Subject<any>();
  private subjectClearRunLines = new Subject<any>();
  private subjectClearAll = new Subject<any>();

  private subjectLineButtonDisable = new BehaviorSubject<boolean>(false);
  private subjectPolygonButtonDisable = new BehaviorSubject<boolean>(false);
  private subjectOuterRingButtonDisable = new BehaviorSubject<boolean>(false);

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

  sendClickDrawRunLine(): void {
    this.subjectDrawRunLine.next();
  }
  getClickDrawRunLine(): Observable<any>{
    return this.subjectDrawRunLine.asObservable();
  }

  sendClickClearRunLines(): void {
    this.subjectClearRunLines.next();
  }
  getClickClearRunLines(): Observable<any>{
    return this.subjectClearRunLines.asObservable();
  }

  sendClickClearAll(): void {
    this.subjectClearAll.next();
  }
  getClickClearAll(): Observable<any>{
    return this.subjectClearAll.asObservable();
  }

  sendLineButtonDisable(state): void {
    this.subjectLineButtonDisable.next(state);
  }
  getLineButtonDisable(): Observable<boolean>{
    return this.subjectLineButtonDisable.asObservable();
  }

  sendPolygonButtonDisable(state): void {
    this.subjectPolygonButtonDisable.next(state);
  }
  getPolygonButtonDisable(): Observable<boolean>{
    return this.subjectPolygonButtonDisable.asObservable();
  }

  sendOuterRingButtonDisable(state): void {
    this.subjectOuterRingButtonDisable.next(state);
  }
  getOuterRingButtonDisable(): Observable<boolean>{
    return this.subjectOuterRingButtonDisable.asObservable();
  }
}
