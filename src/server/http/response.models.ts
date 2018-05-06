import { copy } from '../utils/copy';
import { HTTP_STATUS, Response } from './index';

export class HttpResponse {
  options: HttpResponseOptions;
  response: Response;

  constructor(response: Response) {
    this.response = response;
    this.options = copy(DEFAULT_RESPONSE_OPTIONS);
  }

  withData(data: JsonLike): HttpResponse {
    this.options.data = data;
    return this;
  }

  withStatus(status): HttpResponse {
    this.options.status = status;
    return this;
  }

  asJson(): Response {
    return this.response.status(this.options.status)
        .json(this.options.data);
  }
}

export interface HttpResponseOptions {
  status?: number;
  data?: JsonLike;
}

export const DEFAULT_RESPONSE_OPTIONS: HttpResponseOptions = {
  status: HTTP_STATUS.OK,
  data: {},
};

export type JsonLike = { [key: string]: any };