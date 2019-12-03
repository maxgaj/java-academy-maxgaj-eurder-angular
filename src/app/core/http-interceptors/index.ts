import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {ApiInterceptors} from './api-interceptors';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptors, multi: true}
];
