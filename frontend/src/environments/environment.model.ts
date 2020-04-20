import { RequestOptions } from '../app/core/models/request-options.model';

export interface Environment {
  name: string,
  production: boolean,
  traceRoutes: boolean,
  apiUrl: string,
  apiConfig: EnvironmentApiConfig,
}

export interface EnvironmentApiConfig {
  characters: {
    getList: RequestOptions,
    getItem: RequestOptions,
  },
  spaceships: {
    getList: RequestOptions,
  }
}
