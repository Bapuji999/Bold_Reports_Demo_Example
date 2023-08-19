import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoldReportDesignerModule  } from '@boldreports/angular-reporting-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Report viewer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
// Report Designer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';

// data-visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BoldReportDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
