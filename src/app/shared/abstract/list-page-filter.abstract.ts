import { Directive, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Subscription, switchMap, take, zip } from 'rxjs';
import { Planet } from '../interfaces/planet.interface';
import { Resident } from '../interfaces/resident.interface';
import { ListPageService } from '../services/list-page.service';
import { ListPageAbstract } from './list-page.abstract';
import { ajax } from 'rxjs/ajax';

interface FilterParams {
  [key: string]: string;
}

@Directive()
export abstract class OnePlanetComponentAbstract
  extends ListPageAbstract<Resident, Planet>
  implements OnDestroy
{
  constructor(protected override store: ListPageService<Planet>) {
    super(store);

    this.filterForm = this.getFilterForm();
    this.filterFormChangeSub = this.filterForm.valueChanges.subscribe((data) =>
      this.filterList(data)
    );
  }

  protected abstract getFilterForm(): FormGroup;
  filterForm: FormGroup;

  private _allItems: Resident[] = [];

  next() {
    if (this._allItems.length) {
      return;
    }

    this._isLoading = true;

    // берём из сервиса текущую планету, берём оттуда массив резидентов и идём за каждым на сервер. take автоматически отписывает по результаты

    this.store
      .fetchList()
      .pipe(
        switchMap((response) => {
          const residentsUrls = response.residents;
          return zip(residentsUrls.map((url) => ajax<Resident>(url)));
        }),
        map((ajaxResponses) => ajaxResponses.map((res) => res.response)),
        take(1)
      )
      .subscribe((result) => {
        this._allItems = this._allItems.concat(result);
        this._items$.next(result);
        this._isLoading = false;
      });
  }

  filterList(filterParams: FilterParams): void {
    const result: Resident[] = [];

    // создаётся массив, в который попадают только те резиденты, у которых значения по ключам совпадают (только если они не нулы в форме). при желании можно расширить или юзать в других местах

    this._allItems.forEach((item) => {
      for (const [key, value] of Object.entries(filterParams)) {
        if (!value) {
          continue;
        }

        if ((item as any)[key] !== value) {
          return;
        }
      }

      result.push(item);
    });

    this._items$.next(result);
  }

  ngOnDestroy(): void {
    this.filterFormChangeSub.unsubscribe();
  }

  protected filterFormChangeSub!: Subscription;
}
