import { Action } from '@ngrx/store';
import { CharacterFilter } from '../../../core/models/character-filter.model';
import { Character } from '../../../core/models/character.model';

export enum CharacterActionTypes {
  LoadCharacters = '[Character] Load Characters',
  LoadCharactersSuccess = '[Character] Load Characters Success',
  LoadCharactersFailure = '[Character] Load Characters Failure',
  LoadCharacter = '[Character] Load Character',
  LoadCharacterSuccess = '[Character] Load Character Success',
  LoadCharacterFailure = '[Character] Load Character Failure',
  ResetCharacter = '[Character] Reset Character',
}

export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LoadCharacters;

  constructor(public payload: CharacterFilter) {
  }
}

export class LoadCharactersSuccess implements Action {
  readonly type = CharacterActionTypes.LoadCharactersSuccess;

  constructor(public payload: Character[]) {
  }
}

export class LoadCharactersFailure implements Action {
  readonly type = CharacterActionTypes.LoadCharactersFailure;

  constructor(public payload: Error) {
  }
}

export class LoadCharacter implements Action {
  readonly type = CharacterActionTypes.LoadCharacter;

  constructor(public payload: string) {
  }
}

export class LoadCharacterSuccess implements Action {
  readonly type = CharacterActionTypes.LoadCharacterSuccess;

  constructor(public payload: Character) {
  }
}

export class LoadCharacterFailure implements Action {
  readonly type = CharacterActionTypes.LoadCharacterFailure;

  constructor(public payload: Error) {
  }
}

export class ResetCharacter implements Action {
  readonly type = CharacterActionTypes.ResetCharacter;
}

export type CharacterActions =
  LoadCharacters
  | LoadCharactersSuccess
  | LoadCharactersFailure
  | LoadCharacter
  | LoadCharacterSuccess
  | LoadCharacterFailure
  | ResetCharacter;
