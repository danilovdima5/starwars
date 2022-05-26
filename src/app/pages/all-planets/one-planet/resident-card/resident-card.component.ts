import { Component, Input } from '@angular/core';
import { Resident } from '../../../../shared/interfaces/resident.interface';

type ResidentCard = Omit<
  Resident,
  'vehicles' | 'films' | 'species' | 'starships' | 'url'
>;

@Component({
  selector: 'app-resident-card',
  templateUrl: './resident-card.component.html',
})
export class ResidentCardComponent implements ResidentCard {
  @Input() birth_year!: string;
  @Input() eye_color!: string;
  @Input() gender!: string;
  @Input() hair_color!: string;
  @Input() height!: string;
  @Input() homeworld!: string;
  @Input() mass!: string;
  @Input() name!: string;
  @Input() skin_color!: string;
  @Input() created!: string;
  @Input() edited!: string;
}
