import { Component } from '@angular/core'
import Control from 'ol/control/Control'
import { DrawInteractionService } from '../draw-interaction.service'
import { type Subscription } from 'rxjs'

@Component({
  selector: 'app-line-button',
  templateUrl: './line-button.component.html',
  styleUrls: ['./line-button.component.css']
})

export class LineButtonComponent extends Control {
  LineButtonDisableEventSubscription: Subscription
  drawLineDisable: boolean

  constructor (private readonly drawInteractionService: DrawInteractionService) {
    super({
      element: document.getElementById('draw-line')
    })
    this.LineButtonDisableEventSubscription = this.drawInteractionService.getLineButtonDisable().subscribe((x) => {
      this.drawLineDisable = x
    })
  }

  onDrawLineClick (): void {
    this.drawInteractionService.sendClickDrawLine()
  }
}
