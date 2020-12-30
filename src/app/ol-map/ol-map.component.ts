import { Component, OnInit} from '@angular/core';
import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import {defaults as defaultInteractions, Select} from 'ol/interaction';
import Map from 'ol/Map';
import View from 'ol/View';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import GeometryType from 'ol/geom/GeometryType';
import {defaults as defaultControls} from 'ol/control';
import ContextMenu from 'ol-contextmenu';
import { DrawLineButtonComponent } from '../draw-line-button/draw-line-button.component';
import {DrawPolygonButtonComponent} from '../draw-polygon-button/draw-polygon-button.component';
import {DrawOuterRingComponent} from '../draw-outer-ring/draw-outer-ring.component';
import { DrawInteractionService} from '../draw-interaction.service';
import {Subscription} from 'rxjs';
import {Fill, Stroke, Style} from 'ol/style';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {
  clickDrawLineEventSubscription: Subscription;
  clickDrawPolygonEventSubscription: Subscription;
  clickDrawOuterRingEventSubscription: Subscription;
  map: Map;
  innerVectorSource: VectorSource;
  outerVectorSource: VectorSource;
  innerVectorLayer: VectorLayer;
  outerVectorLayer: VectorLayer;
  draw: Draw;
  select: Select;
  featureToDelete: any;

  constructor(private drawInteractionService: DrawInteractionService) {
    // subscription to click events from draw buttons
    this.clickDrawLineEventSubscription = this.drawInteractionService.getClickDrawLine().subscribe(() => {
      this.addInteraction(GeometryType.LINE_STRING, this.innerVectorSource);
    });
    this.clickDrawPolygonEventSubscription = this.drawInteractionService.getClickDrawPolygon().subscribe(() => {
      this.addInteraction(GeometryType.POLYGON, this.innerVectorSource);
    });
    this.clickDrawOuterRingEventSubscription = this.drawInteractionService.getClickDrawOuterRing().subscribe(() => {
      this.addInteraction(GeometryType.POLYGON, this.outerVectorSource);
    });
  }
  ngOnInit(): void {

    // layers definition
    const basemap = new TileLayer({
      source: new OSM(),
    });
    this.innerVectorSource = new VectorSource({wrapX: false});
    const innerRingColor = 'rgba(79, 79, 79, 1)';
    this.innerVectorLayer = new VectorLayer({
      source: this.innerVectorSource,
      style: new Style({
        fill: new Fill({
          color: innerRingColor,
        }),
        stroke: new Stroke({
          color: innerRingColor,
          width: 3,
        }),
      })
    });
    this.outerVectorSource = new VectorSource({wrapX: false});
    const outerRingColor = 'rgba(0, 255, 0, 0.8)';
    this.outerVectorLayer = new VectorLayer({
      source: this.outerVectorSource,
      style: new Style({
        fill: new Fill({
          color: outerRingColor,
        }),
        stroke: new Stroke({
          color: outerRingColor,
          width: 1,
        }),
      })
    });

    // contextmenu
    const deleteIcon = 'https://cdn.iconscout.com/icon/free/png-32/delete-726-458722.png';
    const contextmenuItems = [{
      text: 'Delete',
      classname: 'marker',
      icon: deleteIcon,
      callback: (() => {
          this.innerVectorSource.removeFeature(this.featureToDelete);
      })
    },
      '-' // this is a separator
    ];
    const contextmenu = new ContextMenu({
      width: 180,
      defaultItems: true,
      items: contextmenuItems
    });

    // mapcontrols
    const mapControls = [new DrawLineButtonComponent(new DrawInteractionService()),
                         new DrawPolygonButtonComponent(new DrawInteractionService()),
                         new DrawOuterRingComponent(new DrawInteractionService()),
                         contextmenu];
    this.select = new Select();
    this.map = new Map({
      interactions: defaultInteractions({ doubleClickZoom: false }).extend([this.select]),
      controls: defaultControls().extend(mapControls),
      layers: [basemap, this.outerVectorLayer, this.innerVectorLayer],
      target: 'map',
      view: new View({
        center: [-11000000, 4600000],
        zoom: 4,
      }),
    });

    // making sure contextmenu open only on features select
    contextmenu.on('beforeopen', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (ft) => {
        return ft;
      });
      this.featureToDelete = feature;
      if (feature) { // open only on features
        contextmenu.enable();
      } else {
        contextmenu.disable();
      }
    });
  }

  // RemoveInteraction(): void {
  //   this.map.removeInteraction(this.draw);
  // }

  addInteraction(geometryType, vectorSource): void {
    this.draw = new Draw({
      source: vectorSource,
      type: geometryType,
    });
    this.map.addInteraction(this.draw);
    this.draw.on('drawend', () => {
      this.map.removeInteraction(this.draw);
    });
  }
}
