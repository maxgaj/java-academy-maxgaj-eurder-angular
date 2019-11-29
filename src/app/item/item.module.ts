import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes: Routes = [
  {path: 'item', component: ItemOverviewComponent}
];

@NgModule({
  declarations: [
    ItemOverviewComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemModule { }
