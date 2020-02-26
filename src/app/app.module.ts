import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './global/grid/grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule} from '@angular/material/toolbar';
import { AgGridModule } from 'ag-grid-angular';
import { NavComponent} from './global/nav/nav.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordiansComponent } from './global/accordians/accordians.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { PieChartComponent } from './global/charts/pie-chart/pie-chart.component';
import { TreeMapComponent } from './global/charts/tree-map/tree-map.component';
import { LineChartComponent } from './global/charts/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    NavComponent,
    AccordiansComponent,
    PieChartComponent,
    TreeMapComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    AgGridModule.withComponents([GridComponent]),
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    GoogleChartsModule.forRoot(),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
