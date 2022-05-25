import { Component } from '@angular/core';
import { ListPageProvider } from './all-planets.provider';
import { URL_TOKEN } from '../../shared/utilities/url.token';
import { URLS } from '../../shared/utilities/urls';
import { ListPageComponentAbstract } from '../../shared/abstract/list-page-component.abstract';
import { ListPageService } from '../../shared/services/list-page.service';
import { Planet } from '../../shared/interfaces/planet.interface';

@Component({
  selector: 'all-all-planets',
  templateUrl: './all-planets.component.html',
  providers: [
    { provide: URL_TOKEN, useValue: URLS.allPlanets },
    ListPageProvider,
  ],
})
export class AllPlanetsComponent extends ListPageComponentAbstract<Planet> {
  constructor(protected override store: ListPageService<Planet>) {
    super(store);
  }
}
