import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterFilter } from '../models/character-filter.model';
import { Character } from '../models/character.model';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class CharacterHttpService extends BaseHttpService {

  getCharacterList(filter: CharacterFilter): Observable<Character[]> {
    return this.makeRequest<CharacterFilter, Character[]>(this.apiConfig.characters.getList, filter).pipe(
      map(res => res.body),
    );
  }

  getCharacter(id: string): Observable<Character> {
    return this.makeRequest<{ id: string }, Character>(this.apiConfig.characters.getItem, { id }).pipe(
      map(res => res.body),
    );
  }

}
