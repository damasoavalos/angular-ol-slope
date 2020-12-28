import { Component, OnInit} from '@angular/core';
import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import Map from 'ol/Map';
import View from 'ol/View';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import GeometryType from 'ol/geom/GeometryType';
import {defaults as defaultControls} from 'ol/control';
import { DrawLineButtonComponent } from '../draw-line-button/draw-line-button.component';
import {DrawPolygonButtonComponent} from '../draw-polygon-button/draw-polygon-button.component';
import { DrawInteractionService} from '../draw-interaction.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {
  clickDrawLineEventSubscription: Subscription;
  clickDrawPolygonEventSubscription: Subscription;
  map: Map;
  source: VectorSource;
  draw: Draw;

  constructor(private drawInteractionService: DrawInteractionService) {
    this.clickDrawLineEventSubscription = this.drawInteractionService.getClickDrawLine().subscribe(() => {
      this.RemoveInteraction();
      this.addInteraction(GeometryType.LINE_STRING);
    });
    this.clickDrawPolygonEventSubscription = this.drawInteractionService.getClickDrawPolygon().subscribe(() => {
      this.RemoveInteraction();
      this.addInteraction(GeometryType.POLYGON);
    });
  }
  ngOnInit(): void {

    const basemap = new TileLayer({
      source: new OSM(),
    });

    this.source = new VectorSource({wrapX: false});

    const vector = new VectorLayer({
      source: this.source,
    });

    const mapControls = [new DrawLineButtonComponent(new DrawInteractionService()),
                         new DrawPolygonButtonComponent(new DrawInteractionService())];

    this.map = new Map({
      controls: defaultControls().extend(mapControls),
      layers: [basemap, vector],
      target: 'map',
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4,
      }),
    });
  }

  RemoveInteraction(): void {
    this.map.removeInteraction(this.draw);
  }

  addInteraction(geometryType): void {
    this.draw = new Draw({
      source: this.source,
      type: geometryType,
    });
    this.map.addInteraction(this.draw);
  }
}
