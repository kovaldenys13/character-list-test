import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import { API_CONFIG, API_URL } from './injection-tokens';
import { CharacterHttpService } from './services/character-http.service';
import { SpaceshipHttpService } from './services/spaceship-http.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: API_URL, useValue: environment.apiUrl },
    { provide: API_CONFIG, useValue: environment.apiConfig },
    CharacterHttpService,
    SpaceshipHttpService,
  ],
})
export class CoreModule {
}
