import {Component, OnInit} from '@angular/core';

import {Item, ItemService} from '../../core/item.service';
import {faCircle, faEuroSign, faSearch} from '@fortawesome/free-solid-svg-icons';
import {combineLatest, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.scss']
})
export class ItemOverviewComponent implements OnInit {
  filteredItems$: Observable<Item[]>;
  filteringInput: FormControl = new FormControl('');
  faCircle = faCircle;
  faEuroSign = faEuroSign;
  faSearch = faSearch;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.filteredItems$ = this.getFilteredItems();
  }

  printStockUrgency(stockUrgency: string): string {
    const stockUrgencyMap = new Map()
      .set('STOCK_LOW', 'low')
      .set('STOCK_MEDIUM', 'medium')
      .set('STOCK_HIGH', 'high');
    return stockUrgencyMap.get(stockUrgency);
  }

  private getFilteredItems(): Observable<Item[]> {
    const items$ = this.itemService.getHeroes();
    const filteringInput$ = this.filteringInput.valueChanges.pipe(startWith(''));
    return combineLatest(items$, filteringInput$).pipe(
      map(([items, filterString]) => items.filter(
        item => item.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
      ))
    );
  }
}
