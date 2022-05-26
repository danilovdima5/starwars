import { Component } from '@angular/core';
import { ListPageProvider } from './all-planets.provider';
import { URL_TOKEN } from '../../shared/utilities/url.token';
import { URLS } from '../../shared/utilities/urls';
import { ListPageService } from '../../shared/services/list-page.service';
import { Planet } from '../../shared/interfaces/planet.interface';
import { ListPagePaginationsAbstract } from '../../shared/abstract/list-page-pagination.abstract';

@Component({
  selector: 'app-all-planets',
  templateUrl: './all-planets.component.html',
  providers: [
    { provide: URL_TOKEN, useValue: URLS.allPlanets },
    ListPageProvider,
  ],
})
export class AllPlanetsComponent extends ListPagePaginationsAbstract<Planet> {
  constructor(public override store: ListPageService<Planet>) {
    super(store);
    this.next();
  }
}
