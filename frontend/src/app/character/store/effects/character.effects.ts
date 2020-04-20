import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CharacterFilter } from '../../../core/models/character-filter.model';
import { CharacterHttpService } from '../../../core/services/character-http.service';
import {
  CharacterActionTypes,
  LoadCharacter,
  LoadCharacterFailure,
  LoadCharacters,
  LoadCharactersFailure,
  LoadCharactersSuccess,
  LoadCharacterSuccess,
} from '../actions/character.actions';

@Injectable()
export class CharacterEffects {

  constructor(private actions$: Actions, private characterHttpService: CharacterHttpService) {
  }

  @Effect()
  getCertificateList$ = this.actions$.pipe(
    ofType(CharacterActionTypes.LoadCharacters),
    map((action: LoadCharacters) => action.payload),
    switchMap((filter: CharacterFilter) => this.characterHttpService.getCharacterList(filter).pipe(
      map((res) => new LoadCharactersSuccess(res)),
      catchError((e) => of(new LoadCharactersFailure(e))),
    )),
  );

  @Effect()
  getCertificate$ = this.actions$.pipe(
    ofType(CharacterActionTypes.LoadCharacter),
    map((action: LoadCharacter) => action.payload),
    switchMap((id: string) => this.characterHttpService.getCharacter(id).pipe(
      map((res) => new LoadCharacterSuccess(res)),
      catchError((e) => of(new LoadCharacterFailure(e))),
    )),
  );

}
