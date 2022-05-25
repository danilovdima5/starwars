import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePlanetComponent } from './one-planet.component';

const routes: Routes = [{ path: '', component: OnePlanetComponent }];

@NgModule({
  declarations: [OnePlanetComponent],
  imports: [RouterModule.forChild(routes)],
})
export class OnePlanetModule {}
