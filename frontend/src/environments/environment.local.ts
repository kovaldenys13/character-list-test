import { Environment } from './environment.model';

const API_URL = 'http://localhost:4200/assets/json';

export const environment: Environment = {
  name: 'local',
  production: false,
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
      },
    },
  },
};
