import { HTTP_STATUS, Request, Response } from '../http';

export type ResourceControllerClass = {
  //noinspection TsLint
  new(...args: any[]): any;
};

export class ResourceController {
  delete(request: Request, response: Response): Response {
    return this.notImplemented(response);
  }

  get(request: Request, response: Response): Response {
    return this.notImplemented(response);
  }

  patch(request: Request, response: Response): Response {
    return this.notImplemented(response);
  }

  post(request: Request, response: Response): Response {
    return this.notImplemented(response);
  }

  put(request: Request, response: Response): Response {
    return this.notImplemented(response);
  }

  private notImplemented(response: Response): Response {
    return response.sendStatus(HTTP_STATUS.METHOD_NOT_ALLOWED);
  }
}