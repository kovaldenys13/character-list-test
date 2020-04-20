import { Episode } from '../enums/episode.enum';
import { Species } from '../enums/species.enum';
import { Spaceship } from './spaceship.model';

export class Character {
  id: string;
  createdAt: string;
  name: string;
  birthBbyYear: number;
  species: Species[];
  episodes: Episode[];
  spaceships: Spaceship[];
}


