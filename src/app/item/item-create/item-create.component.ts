import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {faEuroSign} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  itemForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    amountOfStock: new FormControl('')
  });

  faEuroSign = faEuroSign;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemForm.value);
  }

}
