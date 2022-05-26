import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CustomSelectModule } from '../../../shared/components/custom-select/custom-select.module';
import { LoaderModule } from '../../../shared/components/loader/loader.module';
import { BigPlanetCardComponent } from './big-planet-card/big-planet-card.component';
import { OnePlanetComponent } from './one-planet.component';
import { ResidentCardComponent } from './resident-card/resident-card.component';

const routes: Routes = [{ path: '', component: OnePlanetComponent }];

@NgModule({
  declarations: [
    OnePlanetComponent,
    BigPlanetCardComponent,
    ResidentCardComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CustomSelectModule,
    ReactiveFormsModule,
    LoaderModule,
  ],
})
export class OnePlanetModule {}
