import {Component} from '@angular/core';
import Control from 'ol/control/Control';
import {DrawInteractionService} from '../draw-interaction.service';

@Component({
  selector: 'app-elevation-input',
  templateUrl: './elevation-input.component.html',
  styleUrls: ['./elevation-input.component.css']
})
export class ElevationInputComponent extends Control {

  constructor(private drawInteractionService: DrawInteractionService) {
    super({
      element: document.getElementById('elevation-input')
    });
  }

  elevationValue = 1;

  onIncrement(): void {
    this.elevationValue += 1;
  }

  onDecrement(): void {
    if (this.elevationValue > 1) {
      this.elevationValue -= 1;
    }
  }

  onValidate(): void {
    if (this.elevationValue <= 0) {
      this.elevationValue = 1;
    }
  }

}
