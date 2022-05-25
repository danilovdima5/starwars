import { Directive } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListPageService } from '../services/list-page.service';

@Directive()
export abstract class ListPageComponentAbstract<T> {
  protected constructor(protected store: ListPageService<T>) {}

  private _items$ = new BehaviorSubject<T[]>([]);

  get items$(): Observable<T[]> {
    return this._items$.asObservable();
  }

  private pageToFetch = 1;

  next() {
    this.store.fetchList(this.pageToFetch).subscribe((response) => {
      this._items$.next(this._items$.getValue().concat(response.results));
      this.pageToFetch++;
    });
  }
}
