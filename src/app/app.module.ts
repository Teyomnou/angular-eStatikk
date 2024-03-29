import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';

import {Chart} from 'chart.js';
import { registerables } from 'chart.js';
import { MultiBarColumnComponent } from './multi-bar-column/multi-bar-column.component';
import { StreamsDataComponent } from './streams-data/streams-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { HomeComponent } from './home/home.component';



Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    MultiBarColumnComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StreamsDataComponent,
    HttpClientModule,
    ChartDemoComponent,
    PieChartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
