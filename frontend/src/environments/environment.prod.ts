import { Environment } from './environment.model';

const API_URL = 'http://some-prod.io/api/v1';

export const environment: Environment = {
  name: 'local',
  production: true,
  traceRoutes: false,
  apiUrl: API_URL,
  apiConfig: {
    characters: {
      getList: {
        uri: API_URL + '/character',
        method: 'GET',
      },
      getItem: {
        uri: API_URL + '/character/{id}',
        method: 'GET',
      },
    },
    spaceships: {
      getList: {
        uri: API_URL + '/spaceships',
        method: 'GET',
      }
    }
  },
};
