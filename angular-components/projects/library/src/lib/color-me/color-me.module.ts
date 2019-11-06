import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import { ColorMeComponent } from './color-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColorMeComponent
  ],
  exports: [
    ColorMeComponent
  ],
  providers: []
})
export class ColorMeModule {}
