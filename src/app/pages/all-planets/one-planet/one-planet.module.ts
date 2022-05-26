import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomSelectModule } from '../../../shared/components/custom-select/custom-select.module';
import { BigPlanetCardComponent } from './big-planet-card/big-planet-card.component';
import { OnePlanetComponent } from './one-planet.component';

const routes: Routes = [{ path: '', component: OnePlanetComponent }];

@NgModule({
  declarations: [OnePlanetComponent, BigPlanetCardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CustomSelectModule,
    ReactiveFormsModule,
  ],
})
export class OnePlanetModule {}
