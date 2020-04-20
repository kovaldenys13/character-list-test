import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { API_CONFIG, API_URL } from '../injection-tokens';

import { BaseHttpService } from './base-http.service';

describe('BaseHttpService', () => {
  let service: BaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        BaseHttpService,
        { provide: API_URL, useValue: 'apiUrl' },
        { provide: API_CONFIG, useValue: 'apiConfig' },
      ],
    });
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
