import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
})
export class CharacterDetailsComponent implements OnInit {
  @Input() character: Character;
  episodes: string;
  species: string;

  ngOnInit() {
    this.episodes = this.character.episodes.join(', ');
    this.species = this.character.species.join(', ');
  }
}
