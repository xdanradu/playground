import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagePage} from './message.page';
import {RouterModule, Routes} from '@angular/router';
import {CustomComponentsModule} from '../../../../projects/library/src/lib/custom-components.module';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  }
];

@NgModule({
  declarations: [
    MessagePage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule
  ],
  providers: []
})
export class MessagePageModule { }
