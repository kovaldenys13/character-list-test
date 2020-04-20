import { Character } from '../../../core/models/character.model';
import { CharacterState } from '../reducers/character.reducer';

export const characterProjectors = {
  getCharacter: (state: CharacterState): Character => state.character,
  getCharacters: (state: CharacterState): Character[] => state.characters,
  getIsProcessing: (state: CharacterState): boolean => state.isProcessing,
};
