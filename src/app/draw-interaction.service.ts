import { Injectable } from '@angular/core'
import { type Observable, Subject, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DrawInteractionService {
  private readonly subjectDrawLine = new Subject<any>()
  private readonly subjectDrawPolygon = new Subject<any>()
  private readonly subjectDrawOuterRing = new Subject<any>()
  private readonly subjectDrawRunLine = new Subject<any>()
  private readonly subjectClearRunLines = new Subject<any>()
  private readonly subjectClearAll = new Subject<any>()

  private readonly subjectLineButtonDisable = new BehaviorSubject<boolean>(false)
  private readonly subjectPolygonButtonDisable = new BehaviorSubject<boolean>(false)
  private readonly subjectOuterRingButtonDisable = new BehaviorSubject<boolean>(false)

  private readonly subjectElevationValue = new BehaviorSubject<number>(0)

  sendClickDrawLine (): void {
    this.subjectDrawLine.next()
  }

  getClickDrawLine (): Observable<any> {
    return this.subjectDrawLine.asObservable()
  }

  sendClickDrawPolygon (): void {
    this.subjectDrawPolygon.next()
  }

  getClickDrawPolygon (): Observable<any> {
    return this.subjectDrawPolygon.asObservable()
  }

  sendClickDrawOuterRing (): void {
    this.subjectDrawOuterRing.next()
  }

  getClickDrawOuterRing (): Observable<any> {
    return this.subjectDrawOuterRing.asObservable()
  }

  sendClickDrawRunLine (): void {
    this.subjectDrawRunLine.next()
  }

  getClickDrawRunLine (): Observable<any> {
    return this.subjectDrawRunLine.asObservable()
  }

  sendClickClearRunLines (): void {
    this.subjectClearRunLines.next()
  }

  getClickClearRunLines (): Observable<any> {
    return this.subjectClearRunLines.asObservable()
  }

  sendClickClearAll (): void {
    this.subjectClearAll.next()
  }

  getClickClearAll (): Observable<any> {
    return this.subjectClearAll.asObservable()
  }

  sendLineButtonDisable (state): void {
    this.subjectLineButtonDisable.next(state)
  }

  getLineButtonDisable (): Observable<boolean> {
    return this.subjectLineButtonDisable.asObservable()
  }

  sendPolygonButtonDisable (state): void {
    this.subjectPolygonButtonDisable.next(state)
  }

  getPolygonButtonDisable (): Observable<boolean> {
    return this.subjectPolygonButtonDisable.asObservable()
  }

  sendOuterRingButtonDisable (state): void {
    this.subjectOuterRingButtonDisable.next(state)
  }

  getOuterRingButtonDisable (): Observable<boolean> {
    return this.subjectOuterRingButtonDisable.asObservable()
  }

  sendElevationValue (elevValue): void {
    this.subjectElevationValue.next(elevValue)
  }

  getElevationValue (): Observable<number> {
    return this.subjectElevationValue.asObservable()
  }
}
