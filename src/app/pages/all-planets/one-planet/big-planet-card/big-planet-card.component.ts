import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface BigPlanetCard {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

@Component({
  selector: 'app-big-planet-card',
  templateUrl: './big-planet-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BigPlanetCardComponent implements BigPlanetCard {
  @Input() name!: string;

  @Input() climate!: string;
  @Input() created!: string;
  @Input() diameter!: string;
  @Input() edited!: string;
  @Input() gravity!: string;
  @Input() orbital_period!: string;
  @Input() population!: string;
  @Input() rotation_period!: string;
  @Input() surface_water!: string;
  @Input() terrain!: string;
}
