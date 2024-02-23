import { Component } from '@angular/core'
import Control from 'ol/control/Control'
import { DrawInteractionService } from '../draw-interaction.service'

@Component({
  selector: 'app-clear-run-lines-button',
  templateUrl: './clear-run-lines-button.component.html',
  styleUrls: ['./clear-run-lines-button.component.css']
})
export class ClearRunLinesButtonComponent extends Control {
  constructor (private readonly drawInteractionService: DrawInteractionService) {
    super({
      element: document.getElementById('clear-run-lines')
    })
  }

  onClearRunLinesClick (): void {
    this.drawInteractionService.sendClickClearRunLines()
  }
}
