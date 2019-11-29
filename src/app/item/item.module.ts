import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'item', component: ItemOverviewComponent}
];

@NgModule({
  declarations: [
    ItemOverviewComponent
  ],
  imports: [
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemModule { }
