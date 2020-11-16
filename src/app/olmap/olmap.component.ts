import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import Map from 'ol/Map';
import View from 'ol/View';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import GeometryType from 'ol/geom/GeometryType';
import {defaults as defaultControls} from 'ol/control';
import ZoomSlider from 'ol/control/ZoomSlider';
import { DrawLineButtonComponent } from '../draw-line-button/draw-line-button.component';

@Component({
  selector: 'olmap',
  templateUrl: './olmap.component.html',
  styleUrls: ['./olmap.component.css']
})
export class OlmapComponent implements OnInit {

  // constructor() { }  

  ngOnInit(): void {

    var raster = new TileLayer({
      source: new OSM(),
    });

    var source = new VectorSource({wrapX: false});

    var vector = new VectorLayer({
      source: source,
    });    

    var map_controls = [new ZoomSlider(), new DrawLineButtonComponent()];    

    var map = new Map({
      controls: defaultControls().extend(map_controls),
      layers: [raster, vector],
      target: 'map',
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4,
      }),
    });


    var draw; // global so we can remove it later
    draw = new Draw({
      source: source,
      type: GeometryType.LINE_STRING,
    });
    map.addInteraction(draw);  

    // var draw; // global so we can remove it later
    // function addInteraction() {
    //   draw = new Draw({
    //     source: source,
    //     type: GeometryType.LINE_STRING,
    //   });
    //     map.addInteraction(draw);      
    // }    

    // /**
    //  * Handle change event.
    //  */
    // typeSelect.onchange = function () {
    //   map.removeInteraction(draw);
    //   addInteraction();
    // };    
  }
}
