import { Controller } from '../decorators/controller';
import { HTTP_STATUS, Request, Response } from '../http';
import { ResourceController } from '../models/resouce-controller.model';

@Controller('/greeting')
export class GreetingController implements Partial<ResourceController> {
  constructor() {}

  get(request: Request, response: Response): Response {
    return response.sendStatus(HTTP_STATUS.OK);
  }
}
