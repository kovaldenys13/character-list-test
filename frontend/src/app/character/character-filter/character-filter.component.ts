import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import pickBy from 'lodash/pickBy';
import { debounceTime, filter } from 'rxjs/operators';
import { InputMaskPatterns } from '../../core/consts/input-mask-patterns.const';
import { InputMasks } from '../../core/consts/input-masks.const';
import { DebounceTime } from '../../core/enums/debounce-time.enum';
import { Episode } from '../../core/enums/episode.enum';
import { Species } from '../../core/enums/species.enum';
import { CharacterFilter } from '../../core/models/character-filter.model';
import { ReactiveFormValue } from '../../core/models/reactive-form-value.model';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: [ './character-filter.component.scss' ],
})
export class CharacterFilterComponent {
  @Output() formChanged = new EventEmitter<CharacterFilter>();
  form: FormGroup;
  species: Species[] = Object.values(Species);
  episodes: Episode[] = Object.values(Episode);

  swTimePattern = InputMaskPatterns.swTime;
  swTimeMask = InputMasks.swTime;

  constructor(private fb: FormBuilder) {
    let initForm: ReactiveFormValue<CharacterFilter> = {
      species: null,
      episode: null,
      birthFrom: [ null, Validators.pattern(/(^$)|(^\d+(A|B)BY$)/) ],
      birthTill: [ null, Validators.pattern(/(^$)|(^\d+(A|B)BY$)/) ],
    };
    this.form = this.fb.group(initForm);

    this.form.valueChanges.pipe(
      debounceTime(DebounceTime.FormChange),
      filter(() => this.form.valid),
    ).subscribe((values: Object) => this.formChanged.emit(pickBy(values)));
  }
}
