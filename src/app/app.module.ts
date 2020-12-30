import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { LineButtonComponent } from './line-button/line-button.component';
import { PolygonButtonComponent } from './polygon-button/polygon-button.component';
import { OuterRingComponent } from './outer-ring/outer-ring.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    OlMapComponent,
    LineButtonComponent,
    PolygonButtonComponent,
    OuterRingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
