import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import { TextMessageComponent } from './text-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TextMessageComponent
  ],
  exports: [
    TextMessageComponent
  ],
  providers: []
})
export class TextMessageModule {}
