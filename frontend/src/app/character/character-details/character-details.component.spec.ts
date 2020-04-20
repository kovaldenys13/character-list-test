import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Episode } from '../../core/enums/episode.enum';
import { Species } from '../../core/enums/species.enum';

import { CharacterDetailsComponent } from './character-details.component';

describe('CharacterDetailsComponent', () => {
  let component: CharacterDetailsComponent;
  let fixture: ComponentFixture<CharacterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CharacterDetailsComponent);
    component = fixture.componentInstance;
    component.character = {
      id: '04349f6c-823e-11ea-bc55-0242ac130003',
      name: 'Han Solo',
      createdAt: '2020-12-10T16:49:14.582Z',
      birthBbyYear: 29,
      species: [ Species.Aleena, Species.Besalisk ],
      episodes: [ Episode.ANewHope ],
      spaceships: [],
    };

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
