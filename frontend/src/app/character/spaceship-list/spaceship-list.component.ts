import { Component, Input } from '@angular/core';
import { Spaceship } from '../../core/models/spaceship.model';

@Component({
  selector: 'app-spaceship-list',
  templateUrl: './spaceship-list.component.html',
})
export class SpaceshipListComponent {
  @Input() spaceships: Spaceship[];
  trackByFn = (index: number, item: Spaceship) => item.id;
}
