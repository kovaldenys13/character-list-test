import { HttpClient, HttpEventType, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as UriTemplate from 'uri-templates';
import { EnvironmentApiConfig } from '../../../environments/environment.model';
import { API_CONFIG, API_URL } from '../injection-tokens';
import { RequestOptions } from '../models/request-options.model';

@Injectable()
export class BaseHttpService {

  constructor(
    @Inject(API_URL) protected apiUrl: string,
    @Inject(API_CONFIG) protected apiConfig: EnvironmentApiConfig,
    protected http: HttpClient,
  ) {
  }

  /**
   * Method for isolate logic for requests and describe all requests inside of environment
   * @typeParam I   queryParams for GET request or body for the rest
   * @typeParam O   response type
   */
  makeRequest<I, O>(options: RequestOptions, data?: {}): Observable<HttpResponse<O>> {
    let uriTemplate = UriTemplate(options.uri);
    let url = uriTemplate.fillFromObject(data);
    let body;
    let init = { responseType: options.responseType, params: undefined };
    if (options.method === 'GET') {
      init.params = new HttpParams({ fromObject: data });
    } else {
      body = data;
    }

    let request = new HttpRequest<I>(options.method, url, body, init);

    return this.http.request<O>(request).pipe(
      filter(res => res.type === HttpEventType.Response),
      map((res: HttpResponse<O>) => res),
    );
  }

}
