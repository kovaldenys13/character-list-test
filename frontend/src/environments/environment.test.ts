import { Environment } from './environment.model';

const API_URL = 'https://kovaldenys13.github.io/character-list-test/assets/json';

export const environment: Environment = {
  name: 'test',
  production: true,
  traceRoutes: false,
  apiUrl: API_URL,
  apiConfig: {
    characters: {
      getList: {
        uri: API_URL + '/character/character-list.json',
        method: 'GET',
      },
      getItem: {
        uri: API_URL + '/character/character-item.json',
        method: 'GET',
      },
    },
    spaceships: {
      getList: {
        uri: API_URL + '/spaceship/spaceship-list.json',
        method: 'GET',
      }
    }
  },
};
