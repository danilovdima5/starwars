import { Directive } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ListPageService } from '../services/list-page.service';

@Directive()
export abstract class ListPageAbstract<T, Y> {
  protected constructor(protected store: ListPageService<Y>) {}

  protected _items$ = new BehaviorSubject<T[]>([]);

  get items$(): Observable<T[]> {
    return this._items$.asObservable();
  }

  protected _isLoading = false;

  get isLoading(): boolean {
    return this._isLoading;
  }

  abstract next(): void;
}
