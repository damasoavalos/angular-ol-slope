import { Component} from '@angular/core';
import Control from 'ol/control/Control';

@Component({
  selector: 'app-draw-line-button',
  templateUrl: './draw-line-button.component.html',
  styleUrls: ['./draw-line-button.component.css']
})
export class DrawLineButtonComponent extends Control {
  constructor() {
      super({});
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'ol-control';
      button.innerHTML = 'Polygon';
      const element = document.createElement('div');
      element.className = 'ol-feature ol-control';
      element.appendChild(button);
      Control.call(this, {
          element
      });
      button.addEventListener('click', () => this.click());
  }

  click(): void {
      console.log('click');
  }
}
