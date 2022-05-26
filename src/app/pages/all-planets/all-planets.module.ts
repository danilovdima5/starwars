import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderModule } from '../../shared/components/loader/loader.module';
import { ObserverModule } from '../../shared/observer/observer.module';
import { AllPlanetsComponent } from './all-planets.component';
import { SmallPlanetCardComponent } from './small-planet-card/small-planet-card.component';

const routes: Routes = [
  { path: '', component: AllPlanetsComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./one-planet/one-planet.module').then((m) => m.OnePlanetModule),
  },
];

@NgModule({
  declarations: [AllPlanetsComponent, SmallPlanetCardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoaderModule,
    ObserverModule,
  ],
})
export class AllPlanetsModule {}
