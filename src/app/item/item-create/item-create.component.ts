import {Component, OnInit} from '@angular/core';
import {Item, ItemService} from '../../core/item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {
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
