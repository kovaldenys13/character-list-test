import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { CharacterFilter } from '../../../core/models/character-filter.model';
import { Character } from '../../../core/models/character.model';
import { CharacterHttpService } from '../../../core/services/character-http.service';

import { CharacterEffects } from './character.effects';

export class MockCharacterHttpService {
  getCharacterList(filter: CharacterFilter): Observable<Character[]> {
    return of([]);
  }

  getCharacter(id: string): Observable<Character> {
    return of(null);
  }
}

describe('CharacterEffects', () => {
  let actions$: Observable<any>;
  let effects: CharacterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharacterEffects,
        provideMockActions(() => actions$),
        { provide: CharacterHttpService, useClass: MockCharacterHttpService },
      ],
    });

    effects = TestBed.get<CharacterEffects>(CharacterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
