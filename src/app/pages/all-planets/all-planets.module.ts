import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlanetsComponent } from './all-planets.component';

const routes: Routes = [
  { path: '', component: AllPlanetsComponent },
  {
    path: ':id',
    loadChildren: () =>
      import('./one-planet/one-planet.module').then((m) => m.OnePlanetModule),
  },
];

@NgModule({
  declarations: [AllPlanetsComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AllPlanetsModule {}
