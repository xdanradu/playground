import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextMessagePage} from './message.page';
import {RouterModule, Routes} from '@angular/router';
import {CustomComponentsModule} from '../../../../projects/library/src/lib/custom-components.module';

const routes: Routes = [
  {
    path: '',
    component: TextMessagePage
  }
];

@NgModule({
  declarations: [
    TextMessagePage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule
  ],
  providers: []
})
export class TextMessagePageModule { }
