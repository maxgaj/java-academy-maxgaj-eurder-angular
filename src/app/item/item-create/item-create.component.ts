import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {faEuroSign, faSpinner} from '@fortawesome/free-solid-svg-icons';
import {Item, ItemService} from '../../core/item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {
  item: Item = {
    name: '',
    description: '',
    price: null,
    amountOfStock: null,
    id: null,
    stockUrgency: null
  };
  isSaving = false;
  failedSaving = false;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit(itemToSave: Item) {
    this.isSaving = true;
    this.failedSaving = false;
    this.itemService.addItem(itemToSave)
      .subscribe(
        (item: Item) => this.onSubmitSuccess(item),
        (error) => this.onSubmitFailed(error));
  }

  private onSubmitSuccess(item: Item) {
    this.isSaving = false;
    this.failedSaving = false;
    this.router.navigate(['/item/detail', item.id]);
  }

  private onSubmitFailed(error: any) {
    this.isSaving = false;
    this.failedSaving = true;
    this.itemService.log(error.message);
  }

}
