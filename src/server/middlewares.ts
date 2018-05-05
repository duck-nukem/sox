import { Next, Request, Response } from './http';

export function logRequest(
    request: Request,
    response: Response,
    next: Next,
): void {
  const currentTime = new Date();
  const ip = request.headers['x-forwarded-for'] ||
      request.connection.remoteAddress;
  const now = currentTime.toISOString();
  const method = request.method;
  const path = request.url;
  const headers = request.headers;
  const auth = !!headers.authorization ?
      `${headers.authorization.split(' ')[0]} Authorization` :
      'Unauthenticated';

  console.log(`[${now}] ${method} ${path} -- ${ip} ${auth}`);

  next();
}

export const MIDDLEWARES = [
  logRequest,
];