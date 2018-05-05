import { Controller} from '../decorators/controller';
import { HTTP_STATUS, Request, Response } from '../http';
import { ResourceController } from '../models/resouce-controller.model';

@Controller('/greeting')
export class GreetingController implements Partial<ResourceController> {
  constructor() {}

  get(req: Request, res: Response): Response {
    return res.sendStatus(HTTP_STATUS.MOVED_PERMANENTLY);
  }
}