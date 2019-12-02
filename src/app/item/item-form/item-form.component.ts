import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Item} from '../../core/item.service';
import {faEuroSign, faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @Input() item: Item;
  @Input() isSaving: boolean;
  @Input() failedSaving: boolean;

  @Output() itemEmitter = new EventEmitter<Item>();

  itemForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl('', Validators.min(0)),
    amountOfStock: new FormControl('', Validators.min(0))
  });

  faEuroSign = faEuroSign;
  faSpinner = faSpinner;

  constructor() {
  }

  ngOnInit() {
    this.itemForm.setValue(
      {
        name: this.item.name,
        description: this.item.description,
        price: this.item.price,
        amountOfStock: this.item.amountOfStock
      },
    );
  }

  onSubmit() {
    if (!this.itemForm.valid) {
      return;
    }
    this.itemEmitter.emit(this.itemForm.value);
  }

}
