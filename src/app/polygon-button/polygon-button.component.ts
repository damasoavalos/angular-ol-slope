import { Component } from '@angular/core';
import Control from 'ol/control/Control';
import { DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-polygon-button',
  templateUrl: './polygon-button.component.html',
  styleUrls: ['./polygon-button.component.css']
})

export class PolygonButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('draw-polygon')
    });
  }

  onDrawPolygonClick(): void {
    this.drawInteractionService.sendClickDrawPolygon();
  }
}
