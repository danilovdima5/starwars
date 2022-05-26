import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Planet } from '../../../shared/interfaces/planet.interface';
import { URLS } from '../../../shared/utilities/urls';

@Injectable()
export class OnePlanetService {
  constructor(private http: HttpClient) {}

  private _planet$ = new BehaviorSubject<Planet | null>(null);

  get planet$(): Observable<Planet | null> {
    return this._planet$.asObservable();
  }

  getPlanet(id: string | number): void {
    this.http
      .get<Planet>(URLS.allPlanets + id)
      .subscribe((response) => this._planet$.next(response));
  }
}
