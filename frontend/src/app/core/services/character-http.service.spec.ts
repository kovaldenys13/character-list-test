import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { API_CONFIG, API_URL } from '../injection-tokens';

import { CharacterHttpService } from './character-http.service';

describe('CharacterHttpService', () => {
  let service: CharacterHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        CharacterHttpService,
        { provide: API_URL, useValue: 'apiUrl' },
        { provide: API_CONFIG, useValue: 'apiConfig' },
      ],
    });
    service = TestBed.inject(CharacterHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
