import { Character } from '../../../core/models/character.model';
import { CharacterActions, CharacterActionTypes } from '../actions/character.actions';

export interface CharacterState {
  character: Character;
  characters: Character[];
  isProcessing: boolean;
}

export const initialState: CharacterState = {
  character: null,
  characters: [],
  isProcessing: false,
};

export function characterReducer(state = initialState, action: CharacterActions): CharacterState {
  switch (action.type) {

    case CharacterActionTypes.LoadCharacters:
      return { ...state, isProcessing: true };
    case CharacterActionTypes.LoadCharactersSuccess:
      return { ...state, isProcessing: false, characters: action.payload };
    case CharacterActionTypes.LoadCharactersFailure:
      return { ...state, isProcessing: false, characters: [] };

    case CharacterActionTypes.LoadCharacter:
      return { ...state, isProcessing: true };
    case CharacterActionTypes.LoadCharacterSuccess:
      return { ...state, isProcessing: false, character: action.payload };
    case CharacterActionTypes.LoadCharacterFailure:
      return { ...state, isProcessing: false, character: null };
    case CharacterActionTypes.ResetCharacter:
      return { ...state, isProcessing: false, character: null };

    default:
      return state;
  }
}
