import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Character } from '../../core/models/character.model';
import { ResetCharacter } from '../store/actions/character.actions';

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: [ './character-details-page.component.scss' ],
})
export class CharacterDetailsPageComponent implements OnInit, OnDestroy {
  character: Character;

  constructor(private route: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit() {
    this.character = this.route.snapshot.data.character;
  }

  ngOnDestroy() {
    this.store.dispatch(new ResetCharacter());
  }
}
