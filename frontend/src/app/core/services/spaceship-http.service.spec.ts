import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { API_CONFIG, API_URL } from '../injection-tokens';

import { SpaceshipHttpService } from './spaceship-http.service';

describe('SpaceshipHttpService', () => {
  let service: SpaceshipHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        SpaceshipHttpService,
        { provide: API_URL, useValue: 'apiUrl' },
        { provide: API_CONFIG, useValue: 'apiConfig' },
      ],
    });
    service = TestBed.inject(SpaceshipHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
