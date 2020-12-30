import {Component} from '@angular/core';
import Control from 'ol/control/Control';
import {DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-outer-ring',
  templateUrl: './outer-ring-button.component.html',
  styleUrls: ['./outer-ring-button.component.css']
})
export class OuterRingButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('outer-ring')
    });
  }

  onDrawOuterRingClick(): void {
    this.drawInteractionService.sendClickDrawOuterRing();
  }
}
