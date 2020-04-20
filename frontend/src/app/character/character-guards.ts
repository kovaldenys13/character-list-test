import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { Character } from '../core/models/character.model';
import { LoadCharacter, ResetCharacter } from './store/actions/character.actions';
import { CharacterFeatureSelectors } from './store/selectors';

@Injectable()
export class CharacterActivateGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    let result = !!route.params.id;
    return result;
  }
}

@Injectable()
export class CharacterResolver implements Resolve<Character> {

  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Character> {
    this.store.dispatch(new LoadCharacter(route.params.id));
    return this.store.select(CharacterFeatureSelectors.character.getCharacter).pipe(
      filter(x => !!x),
      take(1),
    );
  }
}

/* Was added just for example. Use side effects in guards isn't a good idea */
@Injectable()
export class CharacterDeactivateGuard implements CanDeactivate<any> {

  constructor(private store: Store) {
  }

  canDeactivate(component: any): Observable<boolean> {
    this.store.dispatch(new ResetCharacter());
    return this.store.select(CharacterFeatureSelectors.character.getCharacter).pipe(
      map(x => !x),
      filter(x => x),
      take(1),
    );
  }

}
