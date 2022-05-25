import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/core';
import { ListPageFactory } from '../../shared/factories/list-page.factory';
import { ListPageService } from '../../shared/services/list-page.service';
import { URL_TOKEN } from '../../shared/utilities/url.token';

export const ListPageProvider: Provider = {
  provide: ListPageService,
  useFactory: ListPageFactory,
  deps: [URL_TOKEN, HttpClient],
};
