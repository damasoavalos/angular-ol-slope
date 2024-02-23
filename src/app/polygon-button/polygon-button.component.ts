import { Component } from '@angular/core'
import Control from 'ol/control/Control'
import { type DrawInteractionService } from '../draw-interaction.service'
import { type Subscription } from 'rxjs'

@Component({
  selector: 'app-polygon-button',
  templateUrl: './polygon-button.component.html',
  styleUrls: ['./polygon-button.component.css']
})

export class PolygonButtonComponent extends Control {
  PolygonButtonDisableEventSubscription: Subscription
  drawPolygonDisable: boolean

  constructor (private readonly drawInteractionService: DrawInteractionService) {
    super({
      element: document.getElementById('draw-polygon')
    })
    this.PolygonButtonDisableEventSubscription = this.drawInteractionService.getPolygonButtonDisable().subscribe((x) => {
      this.drawPolygonDisable = x
    })
  }

  onDrawPolygonClick (): void {
    this.drawInteractionService.sendClickDrawPolygon()
  }
}
