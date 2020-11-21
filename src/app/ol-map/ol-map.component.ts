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
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {

    const raster = new TileLayer({
      source: new OSM(),
    });

    const source = new VectorSource({wrapX: false});

    const vector = new VectorLayer({
      source,
    });

    const mapControls = [new ZoomSlider(), new DrawLineButtonComponent()];

    const map = new Map({
      controls: defaultControls().extend(mapControls),
      layers: [raster, vector],
      target: 'map',
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4,
      }),
    });


    let draw; // global so we can remove it later
    draw = new Draw({
      source,
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
