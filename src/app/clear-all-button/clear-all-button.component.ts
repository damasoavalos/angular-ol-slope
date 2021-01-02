import {Component} from '@angular/core';
import Control from 'ol/control/Control';
import {DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-clear-all-button',
  templateUrl: './clear-all-button.component.html',
  styleUrls: ['./clear-all-button.component.css']
})
export class ClearAllButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('clear-all')
    });
  }

  onClearAllClick(): void {
    this.drawInteractionService.sendClickClearAll();
  }
}
