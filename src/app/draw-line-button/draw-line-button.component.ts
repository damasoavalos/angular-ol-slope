import {Component} from '@angular/core';
import Control from 'ol/control/Control';

@Component({
  selector: 'app-draw-line-button',
  templateUrl: './draw-line-button.component.html',
  styleUrls: ['./draw-line-button.component.css']
})

export class DrawLineButtonComponent extends Control {
  // @Output() drawLine = new EventEmitter<{Line: string}>();
  button: HTMLElement;
  element: HTMLElement;

  constructor() {
      super({});
      this.button = document.getElementById('draw-line-button');
      this.element = document.getElementById('ol-draw-line');
      // const button = document.createElement('button');
      // button.type = 'button';
      // button.className = 'draw-line-button';
      // button.innerHTML = 'Polygon';
      // button.style.position = 'absolute';
      // button.style.borderRadius = '2px 2px 0 0';
      // button.style.width = '4.5em';
      // button.style.left = '.5em';
      // button.style.top = '4em';
      // button.style.margin = '1';
      // const element = document.createElement('div');
      // element.className = 'ol-control';
      // element.appendChild(button);
      Control.call(this, {
          element: this.element
      });
      // this.button.addEventListener('click', () => this.click());
  }

  onclick(): void {
      console.log('click');
      // this.drawLine.emit({
      //   Line: 'line'
      // });
  }
}
