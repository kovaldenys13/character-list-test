import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Episode } from '../../core/enums/episode.enum';
import { Species } from '../../core/enums/species.enum';

import { CharacterDetailsPageComponent } from './character-details-page.component';

class StoreMock {
  select = jasmine.createSpy().and.returnValue(of([]));
  dispatch = jasmine.createSpy();
}

describe('CharacterDetailsPageComponent', () => {
  let component: CharacterDetailsPageComponent;
  let fixture: ComponentFixture<CharacterDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDetailsPageComponent ],
      providers: [
        {
          provide: Store,
          useClass: StoreMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                character: {
                  id: '04349f6c-823e-11ea-bc55-0242ac130003',
                  name: 'Han Solo',
                  createdAt: '2020-12-10T16:49:14.582Z',
                  birthBbyYear: 29,
                  species: [ Species.Aleena, Species.Besalisk ],
                  episodes: [ Episode.ANewHope ],
                  spaceships: [],
                },
              },
            },
          },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
