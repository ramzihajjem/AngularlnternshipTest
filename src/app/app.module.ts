import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ListComponent } from './list/list.component';
import { routes } from './routes';
import { Routes, RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe'; // CLI imports router

@NgModule({
  declarations: [
    AppComponent,
    FavorisComponent,
    ListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MDBBootstrapModule.forRoot()

  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }