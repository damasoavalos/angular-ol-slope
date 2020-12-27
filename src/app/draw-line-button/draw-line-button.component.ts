import {Component, Output, EventEmitter} from '@angular/core';
import Control from 'ol/control/Control';
// import GeometryType from 'ol/geom/GeometryType';

@Component({
  selector: 'app-draw-line-button',
  templateUrl: './draw-line-button.component.html',
  styleUrls: ['./draw-line-button.component.css']
})

export class DrawLineButtonComponent extends Control {
  @Output() drawLine = new EventEmitter<{Line: string}>();
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
      button.style.margin = '1';
      const element = document.createElement('div');
      element.className = 'ol-control';
      element.appendChild(button);
      Control.call(this, {
          element
      });
      button.addEventListener('click', () => this.click());
  }

  click(): void {
      console.log('click');
      this.drawLine.emit({
        Line: 'line'
      });
  }
}
