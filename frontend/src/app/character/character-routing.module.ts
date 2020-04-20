import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsPageComponent } from './character-details-page/character-details-page.component';
import { CharacterActivateGuard, CharacterResolver } from './character-guards';
import { CharacterListPageComponent } from './character-list-page/character-list-page.component';

const routes: Routes = [
  {
    path: 'characters',
    component: CharacterListPageComponent,
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsPageComponent,
    canActivate: [ CharacterActivateGuard ],
    resolve: { character: CharacterResolver },
  },
  {
    path: '**',
    redirectTo: 'characters',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    CharacterResolver,
    CharacterActivateGuard,
  ],
})

export class CharacterRoutingModule {
}
