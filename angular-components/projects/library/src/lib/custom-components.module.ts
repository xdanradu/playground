import { NgModule } from '@angular/core';

import {TextMessageModule} from './text-message/text-message.module';
export * from './text-message/text-message.module';

import {NavigationModule} from './navigation/navigation.module';
export * from './navigation/navigation.module';

const MODULES = [
  NavigationModule,
  TextMessageModule
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES]
})
export class CustomComponentsModule { }
