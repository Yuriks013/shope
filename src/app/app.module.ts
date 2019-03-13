import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EnterModule} from './enter/enter.module';
import {MainRoutingModule} from './main-routing/main-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MainRoutingModule,
    EnterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
