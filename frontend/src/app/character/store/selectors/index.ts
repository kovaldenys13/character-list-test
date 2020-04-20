import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as characterFeature from '../reducers';
import { characterProjectors } from './character.projectors';

const CharacterFeatureSelector = createFeatureSelector<characterFeature.FeatureState>(characterFeature.FeatureKey);
const characterSelector = createSelector(CharacterFeatureSelector, (state) => state.character);

export const CharacterFeatureSelectors = {
  character: {
    getCharacter: createSelector(characterSelector, characterProjectors.getCharacter),
    getCharacters: createSelector(characterSelector, characterProjectors.getCharacters),
    getIsProcessing: createSelector(characterSelector, characterProjectors.getIsProcessing),
  },
};


