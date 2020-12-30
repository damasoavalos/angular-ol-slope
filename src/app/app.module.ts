import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OlMapComponent } from './ol-map/ol-map.component';
import { LineButtonComponent } from './line-button/line-button.component';
import { PolygonButtonComponent } from './polygon-button/polygon-button.component';
import { OuterRingButtonComponent } from './outer-ring-button/outer-ring-button.component';
import { ClearButtonComponent } from './clear-button/clear-button.component';

@NgModule({
  declarations: [
    AppComponent,
    OlMapComponent,
    LineButtonComponent,
    PolygonButtonComponent,
    OuterRingButtonComponent,
    ClearButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
