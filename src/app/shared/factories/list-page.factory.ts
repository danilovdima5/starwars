import { HttpClient } from '@angular/common/http';
import { ListPageService } from '../services/list-page.service';

export let ListPageFactory = (url: string, http: HttpClient) => {
  return new ListPageService(url, http);
};
