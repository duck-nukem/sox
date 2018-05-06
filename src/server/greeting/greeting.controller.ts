import { Controller } from '../decorators/controller';
import { RequestMapping } from '../decorators/http-methods';
import { Allow } from '../decorators/allow';
import { HTTP_STATUS, Request, Response } from '../http';
import { REQUEST_METHOD } from '../http/methods';
import { HttpResponse } from '../http/response.models';
import { ResourceController } from '../models/resouce-controller.model';
import { isAuthenticated } from '../permissions';
import { Greeting } from './greeting.models';

@Controller('/greeting')
export class GreetingController implements Partial<ResourceController> {
  constructor() {}

  get(request: Request, response: Response): Response {
    return new HttpResponse(response)
        .withData({message: 'hello'})
        .withStatus(HTTP_STATUS.OK)
        .asJson();
  }

  @RequestMapping({path: '/:name/protected'})
  @Allow(isAuthenticated)
  getProtectedResource(request: Request, response: Response): Response {
    return new HttpResponse(response)
        .withStatus(HTTP_STATUS.OK)
        .asJson();
  }

  @RequestMapping({path: '/:name/messages'})
  getById(request: Request<Greeting>, response: Response): Response {
    return new HttpResponse(response)
        .withData({messages: [`hello ${request.params.name}`]})
        .asJson();
  }

  @RequestMapping({path: '/:name/messages', method: REQUEST_METHOD.POST})
  addBook(request: Request, response: Response): Response {
    return new HttpResponse(response)
        .withStatus(HTTP_STATUS.CREATED)
        .asJson();
  }

  @RequestMapping({path: '/:name/messages', method: REQUEST_METHOD.DELETE})
  removeBook(request: Request, response: Response): Response {
    return new HttpResponse(response)
        .withStatus(HTTP_STATUS.NO_CONTENT)
        .asJson();
  }
}
