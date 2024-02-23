import { Component } from '@angular/core'
import Control from 'ol/control/Control'
import { type DrawInteractionService } from '../draw-interaction.service'
import { type Subscription } from 'rxjs'

@Component({
  selector: 'app-outer-ring-button',
  templateUrl: './outer-ring-button.component.html',
  styleUrls: ['./outer-ring-button.component.css']
})
export class OuterRingButtonComponent extends Control {
  OuterRingButtonDisableEventSubscription: Subscription
  drawOuterRingDisable: boolean

  constructor (private readonly drawInteractionService: DrawInteractionService) {
    super({
      element: document.getElementById('outer-ring')
    })
    this.OuterRingButtonDisableEventSubscription = this.drawInteractionService.getOuterRingButtonDisable().subscribe((x) => {
      this.drawOuterRingDisable = x
    })
  }

  onDrawOuterRingClick (): void {
    this.drawInteractionService.sendClickDrawOuterRing()
  }
}
