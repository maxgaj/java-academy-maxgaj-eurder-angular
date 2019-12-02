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

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.maxLength(255)]),
    price: new FormControl('', Validators.min(0)),
    amountOfStock: new FormControl('', Validators.min(0))
  });

  faEuroSign = faEuroSign;
  faSpinner = faSpinner;
  isSaving = false;
  failedSaving = false;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.itemForm.valid) {
      return;
    }
    this.isSaving = true;
    this.failedSaving = false;
    this.itemService.addItem(this.itemForm.value)
      .subscribe(
        (item: Item) => this.onSubmitSuccess(item),
        (error) => this.onSubmitFailed(error));
  }

  private onSubmitSuccess(item: Item) {
    this.isSaving = false;
    this.failedSaving = false;
    this.router.navigate(['/item', item.id]);
  }

  private onSubmitFailed(error: any) {
    this.isSaving = false;
    this.failedSaving = true;
    this.itemService.log(error.message);
  }

}
