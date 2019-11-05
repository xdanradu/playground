import { NgModule } from '@angular/core';

import {TextMessageModule} from './text-message/text-message.module';
export * from './text-message/text-message.module';

const MODULES = [
  TextMessageModule
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES]
})
export class CustomComponentsModule { }
