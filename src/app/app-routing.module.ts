import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpacelistComponent} from './spacelist/spacelist.component';

const routes: Routes = [

  {
    path: '',
    component: SpacelistComponent,
    data: {
        title: 'Launches',
    },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
