import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemFormComponent } from './item-form/item-form.component';

const routes: Routes = [
  {path: 'item', component: ItemOverviewComponent},
  {path: 'item/new', component: ItemCreateComponent},
  {path: 'item/detail/:id', component: ItemDetailComponent}
];

@NgModule({
  declarations: [
    ItemOverviewComponent,
    ItemCreateComponent,
    ItemDetailComponent,
    ItemFormComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ItemModule { }
