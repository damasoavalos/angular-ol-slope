import { Component, OnInit} from '@angular/core';
import 'ol/ol.css';
import Draw from 'ol/interaction/Draw';
import {defaults as defaultInteractions, Select} from 'ol/interaction';
import Map from 'ol/Map';
import View from 'ol/View';
import {OSM} from 'ol/source';
import VectorSource from 'ol/source/Vector';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import GeometryType from 'ol/geom/GeometryType';
import {defaults as defaultControls} from 'ol/control';
import ContextMenu from 'ol-contextmenu';
import {LineButtonComponent} from '../line-button/line-button.component';
import {PolygonButtonComponent} from '../polygon-button/polygon-button.component';
import {OuterRingButtonComponent} from '../outer-ring-button/outer-ring-button.component';
import {DrawInteractionService} from '../draw-interaction.service';
import {Subscription} from 'rxjs';
import {Fill, Stroke, Style} from 'ol/style';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.css']
})
export class OlMapComponent implements OnInit {
  clickDrawLineEventSubscription: Subscription;
  clickDrawPolygonEventSubscription: Subscription;
  clickDrawOuterRingEventSubscription: Subscription;
  innerVectorSource: VectorSource;
  outerVectorSource: VectorSource;
  innerVectorLayer: VectorLayer;
  outerVectorLayer: VectorLayer;
  map: Map;
  draw: Draw;
  select: Select;
  featureToDelete: any;
  selectedFeatureID: number | string;

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
      callback: (() =>
      {
        const innerFeature = this.innerVectorSource.getFeatureById(this.selectedFeatureID);
        if (innerFeature) {
          this.innerVectorSource.removeFeature(innerFeature);
        }
        const outerFeature = this.outerVectorSource.getFeatureById(this.selectedFeatureID);
        if (outerFeature) {
          this.outerVectorSource.removeFeature(outerFeature);
        }
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
    const mapControls = [new LineButtonComponent(new DrawInteractionService()),
                         new PolygonButtonComponent(new DrawInteractionService()),
                         new OuterRingButtonComponent(new DrawInteractionService()),
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

      if (feature) { // open only on features
        // next line belong to contextmenu "delete" feature
        this.selectedFeatureID = feature.getId();

        contextmenu.enable();
      } else {
        contextmenu.disable();
      }
    });
  }

  addInteraction(geometryType, vectorSource): void {
    this.draw = new Draw({
      source: vectorSource,
      type: geometryType,
    });
    this.map.addInteraction(this.draw);
    this.draw.on('drawend', (event) => {
      event.feature.setId(uuid());
      this.map.removeInteraction(this.draw);
    });
  }
}
