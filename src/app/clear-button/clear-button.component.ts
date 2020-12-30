import {Component} from '@angular/core';
import Control from 'ol/control/Control';
import {DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css']
})
export class ClearButtonComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService ) {
    super({
      element: document.getElementById('clear')
    });
  }

  onClearClick(): void {
    this.drawInteractionService.sendClickClear();
  }
}
