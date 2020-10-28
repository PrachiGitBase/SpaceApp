import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{SpacelistComponent} from  './spacelist/spacelist.component';
import{SpaceListServiceService} from './space-list-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ButtonDetailComponent } from './button-detail/button-detail.component';
import { RocketDetailComponent } from './rocket-detail/rocket-detail.component';
import { FilterDetailComponent } from './filter-detail/filter-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacelistComponent,
    ButtonDetailComponent,
    RocketDetailComponent,
    FilterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SpaceListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
