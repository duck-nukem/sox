import { Request, Response } from '../http';
import { server } from '../index';
import {
  ResourceController,
  ResourceControllerClass,
} from '../models/resouce-controller.model';

export function Controller<T extends ResourceControllerClass>(root: string) {
  return (target: T) => {
    return class extends target {
      //noinspection TsLint
      constructor(...args: any[]) {
        super(...args);
        const instance = Object.assign(this, new ResourceController());

        server.route(root)
            .delete((req: Request, res: Response) => instance.delete(req, res))
            .get((req: Request, res: Response) => instance.get(req, res))
            .patch((req: Request, res: Response) => instance.patch(req, res))
            .post((req: Request, res: Response) => instance.post(req, res))
            .put((req: Request, res: Response) => instance.put(req, res));
      }
    };
  };
}

