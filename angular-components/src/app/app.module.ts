import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CustomComponentsModule} from '../../projects/library/src/lib/custom-components.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
