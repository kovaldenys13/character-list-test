import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterFilter } from '../../core/models/character-filter.model';
import { Character } from '../../core/models/character.model';
import { LoadCharacters } from '../store/actions/character.actions';
import { CharacterFeatureSelectors } from '../store/selectors';

@Component({
  selector: 'app-character-list-page',
  templateUrl: './character-list-page.component.html',
})
export class CharacterListPageComponent {
  characters$: Observable<Character[]>;

  constructor(private store: Store) {
    this.characters$ = this.store.select(CharacterFeatureSelectors.character.getCharacters);
    this.store.dispatch(new LoadCharacters({}));
  }

  onFormChanged(filter: CharacterFilter) {
    this.store.dispatch(new LoadCharacters(filter));
  }
}
