import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SmallPlanetCard } from '../../../shared/interfaces/planet.interface';

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
