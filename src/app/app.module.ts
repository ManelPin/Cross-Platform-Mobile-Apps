import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NwbModule} from 'ng-wizi-bulma';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NwbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
