import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages.routing.module';
import {CommonModule} from '@angular/common';
import {CustomComponentsModule} from '../../../projects/library/src/lib/custom-components.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CustomComponentsModule
  ],
  providers: []
})
export class PagesModule {}
