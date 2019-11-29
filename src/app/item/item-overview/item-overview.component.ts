import { Component, OnInit } from '@angular/core';
import {Item} from '../../core/item';
import {ItemService} from '../../core/item.service';

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  private getItems(): void {
    this.itemService.getHeroes().subscribe(items => this.items = items);
  }
}
