import { Directive } from '@angular/core';
import { Pageable } from '../interfaces/pageable.interface';
import { ListPageService } from '../services/list-page.service';
import { ListPageAbstract } from './list-page.abstract';

@Directive()
export abstract class ListPagePaginationsAbstract<T> extends ListPageAbstract<
  T,
  Pageable<T>
> {
  protected constructor(
    protected override store: ListPageService<Pageable<T>>
  ) {
    super(store);
  }

  private count!: number;

  private _itemsByFetch!: number;

  // Нужно для того чтобы узнать, сколько итемов получаем на каждой подгрузке
  get itemsByFetch(): number {
    return this._itemsByFetch;
  }

  private pageToFetch = 1;

  next() {
    // Если сейчас имеем итемов максимум, то выход
    if (this._items$.getValue().length === this.count) {
      return;
    }

    this._isLoading = true;
    this.store.fetchList({ page: this.pageToFetch }).subscribe((response) => {
      this._items$.next(this._items$.value.concat(response.results));
      this.pageToFetch++;
      this.count = response.count;
      this._isLoading = false;
      this._itemsByFetch = response.results.length;
    });
  }
}
