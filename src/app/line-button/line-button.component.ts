import {Component} from '@angular/core';
import Control from 'ol/control/Control';
import { DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-line-button',
  templateUrl: './line-button.component.html',
  styleUrls: ['./line-button.component.css']
})

export class LineButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('draw-line')
    });
  }

  onDrawLineClick(): void {
    this.drawInteractionService.sendClickDrawLine();
  }
}
