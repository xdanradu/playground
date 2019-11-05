import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TankPage} from './tank.page';
import {RouterModule, Routes} from '@angular/router';
import {CustomComponentsModule} from '../../../../projects/library/src/lib/custom-components.module';

const routes: Routes = [
  {
    path: '',
    component: TankPage
  }
];

@NgModule({
  declarations: [
    TankPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule
  ],
  providers: []
})
export class TankPageModule { }
