import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spaceship } from '../models/spaceship.model';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class SpaceshipHttpService extends BaseHttpService {

  getSpaceshipList(filter: Object): Observable<Spaceship[]> {
    return this.makeRequest<Object, Spaceship[]>(this.apiConfig.spaceships.getList, filter).pipe(
      map(res => res.body),
    );
  }

}
