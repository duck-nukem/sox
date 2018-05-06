import { REQUEST_METHOD, RequestMethod } from '../http/methods';
import { Server } from '../index';

function getFullPath(target: any, route = ''): string {
  const className = target.constructor.name;
  const rootPath = Server.controllerRoots.get(className);

  return `${rootPath}${route}`;
}

function register(registrator: Function): Function {
  return (target: any, propertyKey: string, _: PropertyDescriptor): void => {
    setTimeout(() => registrator(target, propertyKey));
  };
}

export function RequestMapping(options: RequestMappingOptions): Function {
  function registerRoute(target: any, propertyKey: string): void {
    const path = getFullPath(target, options.path);
    const method = typeof options.method === 'undefined' ?
        REQUEST_METHOD.GET :
        options.method;

    method(path, target[propertyKey]);
  }

  return register(registerRoute);
}

export interface RequestMappingOptions {
  path: string;
  method?: RequestMethod;
}
