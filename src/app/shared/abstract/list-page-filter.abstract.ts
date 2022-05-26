import { Directive, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ListPageService } from '../services/list-page.service';
import { ListPageAbstract } from './list-page.abstract';

@Directive()
export abstract class ListPageWithFilter<T>
  extends ListPageAbstract<T>
  implements OnDestroy
{
  constructor(protected override store: ListPageService<T>) {
    super(store);

    this.filterForm = this.getFilterForm();
    this.filterFormChangeSub = this.filterForm?.valueChanges.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  protected abstract getFilterForm(): FormGroup;
  filterForm: FormGroup;

  next() {}

  ngOnDestroy(): void {}

  protected filterFormChangeSub!: Subscription;
}
