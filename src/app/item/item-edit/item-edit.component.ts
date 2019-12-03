import {Component, OnInit} from '@angular/core';
import {Item, ItemService} from '../../core/item.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  item: Item;
  isSaving = false;
  failedSaving = false;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getitem();
  }

  private getitem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  onSubmit(itemToUpdate: Item) {
    this.isSaving = true;
    this.failedSaving = false;
    this.itemService.updateItem(itemToUpdate, this.item.id)
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
