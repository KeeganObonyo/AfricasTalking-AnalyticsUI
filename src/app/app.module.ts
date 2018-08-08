import { ChartService } from './chart.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpModule } from '@angular/http';
import 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
