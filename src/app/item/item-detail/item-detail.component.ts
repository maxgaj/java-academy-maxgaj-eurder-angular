import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Item, ItemService} from '../../core/item.service';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {
  }

  itemForm = new FormGroup({
    name: new FormControl({value: '', disabled: true}),
    description: new FormControl({value: '', disabled: true}),
    price: new FormControl({value: '', disabled: true}),
    amountOfStock: new FormControl({value: '', disabled: true})
  });

  faEuroSign = faEuroSign;

  ngOnInit() {
    this.getitem();
  }

  private getitem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.populateForm(item));
  }

  private populateForm(item: Item): void {
    this.item = item;
    this.itemForm.setValue(
      {
        name: item.name,
        description: item.description,
        price: item.price,
        amountOfStock: item.amountOfStock
      },
    );
  }
}
