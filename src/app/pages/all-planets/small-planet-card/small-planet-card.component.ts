import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

interface SmallPlanetCard {
  name: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  climate: string;
}

@Component({
  selector: 'app-small-planet-card',
  templateUrl: './small-planet-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallPlanetCardComponent implements SmallPlanetCard {
  @Input() name!: string;

  @Input() diameter!: string;
  @Input() gravity!: string;
  @Input() orbital_period!: string;
  @Input() rotation_period!: string;
  @Input() surface_water!: string;
  @Input() terrain!: string;
  @Input() climate!: string;

  @Input() requestNewPlanets!: boolean;

  @Output() onLeaveEnd = new EventEmitter<void>();

  // При появлении на экране отправляет запрос на следующую подгрузку. Можно редактировать

  leaveEnd(): void {
    if (this.requestNewPlanets) {
      this.onLeaveEnd.emit();
      this.requestNewPlanets = false;
    }
  }
}
