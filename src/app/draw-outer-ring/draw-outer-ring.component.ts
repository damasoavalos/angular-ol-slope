import { Component} from '@angular/core';
import Control from 'ol/control/Control';
import { DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-draw-outer-ring',
  templateUrl: './draw-outer-ring.component.html',
  styleUrls: ['./draw-outer-ring.component.css']
})
export class DrawOuterRingComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('ol-draw-outer-ring')
    });
  }

  onDrawOuterRingClick(): void {
    this.drawInteractionService.sendClickDrawOuterRing();
  }

}
