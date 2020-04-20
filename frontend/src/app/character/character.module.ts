import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { CharacterDetailsPageComponent } from './character-details-page/character-details-page.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterFilterComponent } from './character-filter/character-filter.component';
import { CharacterListPageComponent } from './character-list-page/character-list-page.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { SpaceshipListComponent } from './spaceship-list/spaceship-list.component';
import { CharacterEffects } from './store/effects/character.effects';
import * as characterFeature from './store/reducers';

@NgModule({
  declarations: [
    CharacterFilterComponent,
    CharacterListComponent,
    CharacterListPageComponent,
    CharacterDetailsPageComponent,
    CharacterDetailsComponent,
    SpaceshipListComponent,
  ],
  imports: [
    /* Core */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      characterFeature.FeatureKey,
      characterFeature.FeatureToken,
      { metaReducers: characterFeature.metaReducers },
    ),
    EffectsModule.forFeature([ CharacterEffects ]),
    NgxMaskModule.forRoot(),
    /* Custom */
    CharacterRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: characterFeature.FeatureToken, useFactory: characterFeature.featureFactory },
  ],
})
export class CharacterModule {
}
