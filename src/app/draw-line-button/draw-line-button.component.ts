import { Component, OnInit } from '@angular/core';
import Control from 'ol/control/Control';

@Component({
  selector: 'app-draw-line-button',
  templateUrl: './draw-line-button.component.html',
  styleUrls: ['./draw-line-button.component.css']
})
export class DrawLineButtonComponent extends Control {
  constructor() {
      super({});
      let button = document.createElement('button');
      button.type = 'button';
      button.className = 'ol-control';
      button.innerHTML = 'N';
      let element = document.createElement('div');
      element.className = 'ol-feature ol-control';
      element.appendChild(button);
      Control.call(this, {
          element: element
      });
      button.addEventListener('click', () => this.click());
  }

  click() {    
      console.log('click');      
  }
}
