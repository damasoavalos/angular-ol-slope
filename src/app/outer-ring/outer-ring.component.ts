import { Component} from '@angular/core';
import Control from 'ol/control/Control';
import { DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-outer-ring',
  templateUrl: './outer-ring.component.html',
  styleUrls: ['./outer-ring.component.css']
})
export class OuterRingComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('outer-ring')
    });
  }

  onDrawOuterRingClick(): void {
    this.drawInteractionService.sendClickDrawOuterRing();
  }

}
