import { NgModule } from '@angular/core';

import {TextMessageModule} from './text-message/text-message.module';
export * from './text-message/text-message.module';


import {ColorMeModule} from './color-me/color-me.module';
export * from './color-me/color-me.module';

import {NavigationModule} from './navigation/navigation.module';
export * from './navigation/navigation.module';

import {TankModule} from './tank/tank.module';
export * from './navigation/navigation.module';

const MODULES = [
  NavigationModule,
  TextMessageModule,
  ColorMeModule,
  TankModule
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES]
})
export class CustomComponentsModule { }
