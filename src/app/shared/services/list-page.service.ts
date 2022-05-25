import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pageable } from '../interfaces/pageable.interface';

@Injectable()
export class ListPageService<T> {
  constructor(@Inject('url') private url: string, private http: HttpClient) {}

  fetchList(page: string | number): Observable<Pageable<T>> {
    return this.http.get<Pageable<T>>(this.url, {
      params: {
        page,
      },
    });
  }
}
