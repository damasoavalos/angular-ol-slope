import { Component } from '@angular/core';
import Control from 'ol/control/Control';
import { DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-draw-polygon-button',
  templateUrl: './draw-polygon-button.component.html',
  styleUrls: ['./draw-polygon-button.component.css']
})

export class DrawPolygonButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('ol-draw-polygon')
    });
  }

  onDrawPolygonClick(): void {
    this.drawInteractionService.sendClickDrawPolygon();
  }
}
