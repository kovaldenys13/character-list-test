import { InjectionToken } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { characterReducer, CharacterState } from './character.reducer';

export const FeatureKey = 'characterFeature';
export const FeatureToken = new InjectionToken<ActionReducerMap<FeatureState>>(FeatureKey);

export interface FeatureState {
  character: CharacterState,
}

const FeatureReducers: ActionReducerMap<FeatureState> = {
  character: characterReducer,
};

export function featureFactory() {
  return FeatureReducers;
}

export const metaReducers: MetaReducer<FeatureState>[] = !environment.production ? [] : [];


