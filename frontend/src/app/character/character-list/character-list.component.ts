import { Component, Input } from '@angular/core';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  @Input() characters: Character[];
  trackByFn = (index: number, item: Character) => item.id;
}
