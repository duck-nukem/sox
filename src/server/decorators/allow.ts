import { HTTP_STATUS, Request, Response } from '../http';
import { HttpResponse } from '../http/response.models';

export function Allow(...permissions: Function[]): Function {
  function raiseForbiddenResource(response: Response): Response {
    return new HttpResponse(response)
        .withStatus(HTTP_STATUS.FORBIDDEN)
        .withData(undefined)
        .asJson();
  }

  return (_target: any, _p: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    const methodWithPermissionChecks =
        (request: Request, response: Response): Response => {
          const isAllowed = permissions.map(check => check(request))
              .filter(result => result)
              .length === permissions.length;

          if (!isAllowed) {
            return raiseForbiddenResource(response);
          }

          return originalMethod(request, response);
        };

    descriptor.value = methodWithPermissionChecks;
  };
}