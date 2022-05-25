export interface Pageable<T> {
  count: number;
  next: string;
  previous: null | string;
  results: T[];
}
