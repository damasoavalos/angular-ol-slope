import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LineButtonComponent } from './line-button/line-button.component';
import { PolygonButtonComponent } from './polygon-button/polygon-button.component';
import { OuterRingButtonComponent } from './outer-ring-button/outer-ring-button.component';
import { ClearAllButtonComponent } from './clear-all-button/clear-all-button.component';
import { RunLineButtonComponent } from './run-line-button/run-line-button.component';
import { ClearRunLinesButtonComponent } from './clear-run-lines-button/clear-run-lines-button.component';
import { ElevationInputComponent } from './elevation-input/elevation-input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LineButtonComponent,
    PolygonButtonComponent,
    OuterRingButtonComponent,
    ClearAllButtonComponent,
    RunLineButtonComponent,
    ClearRunLinesButtonComponent,
    ElevationInputComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
