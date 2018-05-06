import { Request, Response } from '../http';
import { server } from '../index';
import {
  ResourceController,
  ResourceControllerClass,
} from '../models/resouce-controller.model';
import { REGISTERED_ROUTES } from '../shared';

export function Controller<T extends ResourceControllerClass>(root: string) {
  return (target: T) => {
    return class extends target {
      //noinspection TsLint
      constructor(...args: any[]) {
        super(...args);
        const instance = Object.assign(this, new ResourceController());
        const className = instance.constructor.name;
        registerRoot(className, root);

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

function registerRoot(className: string, root: string): void {
  if (REGISTERED_ROUTES.has(root)) {
    throw new Error(`
    The endpoint '${root}' is already registered. 
    Got this error when trying to set up routing for ${className}
    `);
  }

  REGISTERED_ROUTES.add(root);
}