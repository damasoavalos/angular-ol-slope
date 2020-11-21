import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { DrawLineButtonComponent } from './draw-line-button/draw-line-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    OlMapComponent,
    DrawLineButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
