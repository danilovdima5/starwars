import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pageable } from '../interfaces/pageable.interface';

export interface FetchParams {
  [key: string]: string | number;
}

@Injectable()
export class ListPageService<T> {
  constructor(@Inject('url') private url: string, private http: HttpClient) {}

  fetchList(params: FetchParams): Observable<Pageable<T>> {
    return this.http.get<Pageable<T>>(this.url, {
      params,
    });
  }
}
