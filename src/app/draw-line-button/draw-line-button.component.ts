import {Component} from '@angular/core';
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
      button.className = 'ol-draw-line';
      button.innerHTML = 'Polygon';
      button.style.position = 'absolute';
      button.style.borderRadius = '2px 2px 0 0';
      button.style.width = '4.5em';
      button.style.left = '.5em';
      button.style.top = '4em';
      const element = document.createElement('div');
      element.className = 'ol-control';
      // element.style.width = 'auto';
      // element.style.position = 'relative';
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
