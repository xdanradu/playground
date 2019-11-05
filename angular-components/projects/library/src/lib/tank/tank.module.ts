import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TankComponent } from './tank.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TankComponent
  ],
  exports: [
    TankComponent
  ],
  providers: []
})
export class TankModule {

}
