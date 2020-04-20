import { Episode } from '../enums/episode.enum';
import { Species } from '../enums/species.enum';

export interface CharacterFilter {
  species?: Species;
  episode?: Episode;
  birthFrom?: string;
  birthTill?: string;
}
