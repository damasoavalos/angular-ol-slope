import { Component } from '@angular/core'
import Control from 'ol/control/Control'
import { type DrawInteractionService } from '../draw-interaction.service'

@Component({
  selector: 'app-run-line-button',
  templateUrl: './run-line-button.component.html',
  styleUrls: ['./run-line-button.component.css']
})
export class RunLineButtonComponent extends Control {
  constructor (private readonly drawInteractionService: DrawInteractionService) {
    super({
      element: document.getElementById('run-line')
    })
  }

  onDrawRunLineClick (): void {
    this.drawInteractionService.sendClickDrawRunLine()
  }
}
