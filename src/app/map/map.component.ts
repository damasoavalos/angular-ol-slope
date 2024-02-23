// import Draw from 'ol/interaction/Draw';
// import OSMSource from 'ol/source/OSM';
// import StamenSource from 'ol/source/Stamen';
// import XYZLayer from 'ol/source/XYZ';
import { Component, type OnInit } from '@angular/core'
import 'ol/ol.css'
import 'ol-layerswitcher/dist/ol-layerswitcher.css'
import { defaults as defaultInteractions, Select, Draw } from 'ol/interaction'
import Map from 'ol/Map'
import View from 'ol/View'
import VectorSource from 'ol/source/Vector'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import GroupLayer from 'ol/layer/Group'
import GeometryType from 'ol/geom/GeometryType'
import { defaults as defaultControls, ZoomToExtent } from 'ol/control'
import ContextMenu from 'ol-contextmenu'
import { LineButtonComponent } from '../line-button/line-button.component'
import { PolygonButtonComponent } from '../polygon-button/polygon-button.component'
import { OuterRingButtonComponent } from '../outer-ring-button/outer-ring-button.component'
import { RunLineButtonComponent } from '../run-line-button/run-line-button.component'
import { ClearRunLinesButtonComponent } from '../clear-run-lines-button/clear-run-lines-button.component'
import { ElevationInputComponent } from '../elevation-input/elevation-input.component'
import { ClearAllButtonComponent } from '../clear-all-button/clear-all-button.component'
import { DrawInteractionService } from '../draw-interaction.service'
import { type Subscription } from 'rxjs'
import { Fill, Stroke, Style } from 'ol/style'
import { v4 as uuid } from 'uuid'
import LayerSwitcher, { type Options as LsOptions, type GroupSelectStyle, type BaseLayerOptions, type GroupLayerOptions } from 'ol-layerswitcher'
import { TileImage } from 'ol/source'
import { type Extent, getCenter } from 'ol/extent'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  clickDrawLineEventSubscription: Subscription
  clickDrawPolygonEventSubscription: Subscription
  clickDrawOuterRingEventSubscription: Subscription
  clickDrawRunLineEventSubscription: Subscription
  clickClearRunLinesEventSubscription: Subscription
  clickClearAllEventSubscription: Subscription
  elevationChangeEventSubscription: Subscription
  innerVectorSource: VectorSource
  outerVectorSource: VectorSource
  runLinesVectorSource: VectorSource
  innerVectorLayer: VectorLayer
  outerVectorLayer: VectorLayer
  runLinesVectorLayer: VectorLayer
  map: Map
  draw: Draw
  select: Select
  // featureToDelete: any;
  selectedFeatureID: number | string
  homeExtent: Extent = [-12593284.2123545389622450,
    6639546.3956663161516190,
    -12590723.4198377579450607,
    6640958.5132011296227574]

  // riseValue: number;
  slopeValue: number

  constructor (private readonly drawInteractionService: DrawInteractionService) {
    // subscription to click events from draw buttons
    this.clickDrawLineEventSubscription = this.drawInteractionService.getClickDrawLine().subscribe(() => {
      this.addInteraction(GeometryType.LINE_STRING, this.innerVectorSource)
    })
    this.clickDrawPolygonEventSubscription = this.drawInteractionService.getClickDrawPolygon().subscribe(() => {
      this.addInteraction(GeometryType.POLYGON, this.innerVectorSource)
    })
    this.clickDrawOuterRingEventSubscription = this.drawInteractionService.getClickDrawOuterRing().subscribe(() => {
      this.addInteraction(GeometryType.POLYGON, this.outerVectorSource)
    })
    this.clickDrawRunLineEventSubscription = this.drawInteractionService.getClickDrawRunLine().subscribe(() => {
      this.addInteraction(GeometryType.LINE_STRING, this.runLinesVectorSource)
    })
    this.clickClearRunLinesEventSubscription = this.drawInteractionService.getClickClearRunLines().subscribe(() => {
      this.runLinesVectorSource.clear()
    })
    this.clickClearAllEventSubscription = this.drawInteractionService.getClickClearAll().subscribe(() => {
      this.deleteAll()
    })
    this.elevationChangeEventSubscription = this.drawInteractionService.getElevationValue().subscribe((x) => {
      // this.riseValue = x;
      this.slopeValue = this.calculateSlope(x)
    })
  }

  ngOnInit (): void {
    // ** extra basemaps, wanna keep it for now ** //
    // layers definition
    // const basemap = new TileLayer({
    //   source: new OSM(),
    // });
    //
    // const osm = new TileLayer({
    //   title: 'OSM',
    //   type: 'base',
    //   visible: false,
    //   source: new OSMSource()
    // } as BaseLayerOptions);
    //
    // const worldImagery = new TileLayer({
    //   title: 'Satellite',
    //   type: 'base',
    //   visible: true,
    //   source: new XYZLayer({
    //     url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    //     maxZoom: 19
    //   })
    // } as BaseLayerOptions);
    //
    // const googleLayerTerrain = new TileLayer({
    //   title: 'Google Terrain',
    //   type: 'base',
    //   visible: false,
    //   source: new TileImage({url: 'http://mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}'})
    // } as BaseLayerOptions);
    //
    // const googleLayerRoadNames = new TileLayer({
    //   title: 'Google Road Names',
    //   type: 'base',
    //   visible: false,
    //   source: new TileImage({url: 'http://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'})
    // } as BaseLayerOptions);
    //
    // const googleLayerRoadmap = new TileLayer({
    //   title: 'Google Road Map',
    //   type: 'base',
    //   visible: false,
    //   source: new TileImage({url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'})
    // } as BaseLayerOptions);
    //
    // const googleLayerSatellite = new TileLayer({
    //   title: 'Google Satellite',
    //   type: 'base',
    //   visible: false,
    //   source: new TileImage({url: 'http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}'})
    // } as BaseLayerOptions);

    const googleSatelliteRoads = new TileLayer({
      title: 'Google Satellite & Roads',
      type: 'base',
      visible: true,
      source: new TileImage({ url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' })
    } as BaseLayerOptions)

    const googleTerrainRoads = new TileLayer({
      title: 'Google Terrain & Roads',
      type: 'base',
      visible: false,
      source: new TileImage({ url: 'http://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' })
    } as BaseLayerOptions)

    const baseMaps = new GroupLayer({
      title: 'Base maps',
      layers: [googleSatelliteRoads, googleTerrainRoads]
    } as GroupLayerOptions)

    this.innerVectorSource = new VectorSource({ wrapX: false })
    const innerRingColor = 'rgba(79, 79, 79, 0.8)'
    this.innerVectorLayer = new VectorLayer({
      source: this.innerVectorSource,
      style: new Style({
        fill: new Fill({
          color: innerRingColor
        }),
        stroke: new Stroke({
          color: innerRingColor,
          width: 3
        })
      })
    })
    this.outerVectorSource = new VectorSource({ wrapX: false })
    const outerRingColor = 'rgba(0, 255, 0, 0.8)'
    this.outerVectorLayer = new VectorLayer({
      source: this.outerVectorSource,
      style: new Style({
        fill: new Fill({
          color: outerRingColor
        }),
        stroke: new Stroke({
          color: outerRingColor,
          width: 1
        })
      })
    })
    this.runLinesVectorSource = new VectorSource({ wrapX: false })
    const runLinesColor = 'rgba(0, 0, 255, 1)'
    this.runLinesVectorLayer = new VectorLayer({
      source: this.runLinesVectorSource,
      style: new Style({
        stroke: new Stroke({
          color: runLinesColor,
          width: 1
        })
      })
    })

    // contextmenu
    const deleteIcon = 'https://cdn.iconscout.com/icon/free/png-32/delete-726-458722.png'
    const contextmenuItems = [{
      text: 'Delete',
      classname: 'marker',
      icon: deleteIcon,
      callback: () => { this.deleteFeature() }
    },
    '-' // this is a separator
    ]
    const contextmenu = new ContextMenu({
      width: 180,
      defaultItems: true,
      items: contextmenuItems
    })

    // LayerSwitcher
    const groupStyle: GroupSelectStyle = 'group'
    const opts: LsOptions = {
      reverse: false,
      groupSelectStyle: groupStyle,
      startActive: false,
      activationMode: 'click'
    }
    const layerSwitcher = new LayerSwitcher(opts)

    // Home button AKA ZoomToExtent
    const zoomToExtent = new ZoomToExtent({
      extent: this.homeExtent
    })

    // mapcontrols
    const mapControls = [new LineButtonComponent(new DrawInteractionService()),
      new PolygonButtonComponent(new DrawInteractionService()),
      new OuterRingButtonComponent(new DrawInteractionService()),
      new RunLineButtonComponent(new DrawInteractionService()),
      new ElevationInputComponent(new DrawInteractionService()),
      new ClearRunLinesButtonComponent(new DrawInteractionService()),
      new ClearAllButtonComponent(new DrawInteractionService()),
      layerSwitcher,
      zoomToExtent,
      contextmenu]

    this.select = new Select()
    this.map = new Map({
      interactions: defaultInteractions({ doubleClickZoom: false }).extend([this.select]),
      controls: defaultControls().extend(mapControls),
      layers: [baseMaps, this.outerVectorLayer, this.innerVectorLayer, this.runLinesVectorLayer],
      target: 'map',
      view: new View({
        center: getCenter(this.homeExtent),
        zoom: 16.7
      })
    })

    // making sure contextmenu open only on features select
    contextmenu.on('beforeopen', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (ft) => {
        return ft
      })

      if (feature) { // open only on features
        // next line belong to contextmenu "delete" feature
        this.selectedFeatureID = feature.getId()

        contextmenu.enable()
      } else {
        contextmenu.disable()
      }
    })
  }

  addInteraction (geometryType, vectorSource): void {
    // this check is to avoid an issue when click twice on a button before finish draw
    if (!(this.map.getInteractions().getArray().some(item => item instanceof Draw))) {
      this.draw = new Draw({
        source: vectorSource,
        type: geometryType
      })
      this.map.addInteraction(this.draw)
      this.draw.on('drawend', (event) => {
        switch (vectorSource) {
          case this.innerVectorSource: {
            this.drawInteractionService.sendLineButtonDisable(true)
            this.drawInteractionService.sendPolygonButtonDisable(true)
            break
          }
          case this.outerVectorSource: {
            this.drawInteractionService.sendOuterRingButtonDisable(true)
            break
          }
        }
        event.feature.setId(uuid())
        this.map.removeInteraction(this.draw)
      })
    }
  }

  deleteFeature (): void {
    // Inner Polygon and/or Line feature
    const innerFeature = this.innerVectorSource.getFeatureById(this.selectedFeatureID)
    if (innerFeature) {
      this.innerVectorSource.removeFeature(innerFeature)
      this.drawInteractionService.sendLineButtonDisable(false)
      this.drawInteractionService.sendPolygonButtonDisable(false)
    }

    // Outer Polygon feature
    const outerFeature = this.outerVectorSource.getFeatureById(this.selectedFeatureID)
    if (outerFeature) {
      this.outerVectorSource.removeFeature(outerFeature)
      this.drawInteractionService.sendOuterRingButtonDisable(false)
    }

    // Run line feature
    const runLineFeature = this.runLinesVectorSource.getFeatureById(this.selectedFeatureID)
    if (runLineFeature) {
      this.runLinesVectorSource.removeFeature(runLineFeature)
    }
  }

  deleteAll (): void {
    this.innerVectorSource.clear()
    this.outerVectorSource.clear()
    this.runLinesVectorSource.clear()
    this.drawInteractionService.sendLineButtonDisable(false)
    this.drawInteractionService.sendPolygonButtonDisable(false)
    this.drawInteractionService.sendOuterRingButtonDisable(false)
  }

  calculateSlope (riseValue): number {
    console.log(riseValue)
    return null
  }
}
