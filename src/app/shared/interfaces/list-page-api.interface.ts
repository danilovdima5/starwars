import { Observable } from 'rxjs';

export interface ListPageApiInterface {
  fetchList<T>(page: string | number): Observable<T>;
}
