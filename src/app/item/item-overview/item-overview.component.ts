import {Component, OnInit} from '@angular/core';

import {Item, ItemService} from '../../core/item.service';
import {faCircle, faEuroSign} from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit {
  items$: Observable<Item[]>;
  faCircle = faCircle;
  faEuroSign = faEuroSign;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.items$ = this.itemService.getHeroes();
  }

  printStockUrgency(stockUrgency: string) {
    const stockUrgencyMap = new Map()
      .set('STOCK_LOW', 'low')
      .set('STOCK_MEDIUM', 'medium')
      .set('STOCK_HIGH', 'high');
    return stockUrgencyMap.get(stockUrgency);
  }
}
