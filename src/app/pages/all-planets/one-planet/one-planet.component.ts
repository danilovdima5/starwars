import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnePlanetComponentAbstract } from '../../../shared/abstract/list-page-filter.abstract';
import { SelectItem } from '../../../shared/components/custom-select/custom-select.component';
import { Planet } from '../../../shared/interfaces/planet.interface';
import { ListPageService } from '../../../shared/services/list-page.service';
import { URL_TOKEN } from '../../../shared/utilities/url.token';
import { URLS } from '../../../shared/utilities/urls';
import { ListPageProvider } from '../all-planets.provider';
import { OnePlanetService } from './one-planet.service';

const onePlanetFilterItems: SelectItem[] = [
  {
    key: 'male',
    value: 'Male',
  },
  {
    key: 'female',
    value: 'Female',
  },
];

// получаем айдишник текущей планеты из урла. выглядит костыльно, но не придумал как лучше сделать
const getIdFromUrl = () => {
  const hrefElements = window.location.href.split('/');
  return hrefElements[hrefElements.length - 1];
};

@Component({
  selector: 'app-one-planet',
  templateUrl: './one-planet.component.html',
  providers: [
    { provide: URL_TOKEN, useValue: URLS.allPlanets + getIdFromUrl() },
    ListPageProvider,
    OnePlanetService,
  ],
})
export class OnePlanetComponent extends OnePlanetComponentAbstract {
  constructor(
    public override store: ListPageService<Planet>,
    public onePlanet: OnePlanetService,
    private activatedRoute: ActivatedRoute
  ) {
    super(store);
    this.onePlanet.getPlanet(this.activatedRoute.snapshot.params['id']);
    this.next();
  }

  onePlanetFilterItems = onePlanetFilterItems;

  protected getFilterForm(): FormGroup {
    return new FormGroup({
      gender: new FormControl(null),
    });
  }
}
