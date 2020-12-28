import {Component} from '@angular/core';
import Control from 'ol/control/Control';
import { DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-draw-line-button',
  templateUrl: './draw-line-button.component.html',
  styleUrls: ['./draw-line-button.component.css']
})

export class DrawLineButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('ol-draw-line')
    });
  }

  onDrawLineClick(): void {
    this.drawInteractionService.sendClickDrawLine();
  }
}
