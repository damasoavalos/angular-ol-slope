import { Component, OnInit } from '@angular/core';
import  Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import * as Proj from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: Map;
  constructor() { }

  ngOnInit(): void {
    this.map = new Map({
      layers: [
        new Tile({ source: new OSM()}),
      ],
      target: 'map',
      view: new View({
        center: Proj.transform([-99.23, 50.79], 'EPSG:4326', 'EPSG:3857'),
        zoom: 4
      })
    });
  }

}
