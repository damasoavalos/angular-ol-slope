import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { DrawLineButtonComponent } from './draw-line-button/draw-line-button.component';
import { DrawPolygonButtonComponent } from './draw-polygon-button/draw-polygon-button.component';
import { DrawOuterRingComponent } from './draw-outer-ring/draw-outer-ring.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    OlMapComponent,
    DrawLineButtonComponent,
    DrawPolygonButtonComponent,
    DrawOuterRingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
