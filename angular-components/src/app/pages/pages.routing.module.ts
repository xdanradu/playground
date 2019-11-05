import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {
        path: 'message',
        loadChildren: './message/message.page.module#MessagePageModule'
      },
      {
        path: 'tank',
        loadChildren: './tank/tank.page.module#TankPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
