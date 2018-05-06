import { Request, Response } from '../http';
import { getIPAddress } from '../http/utils';

export function requestLoggerMiddleware(request: Request, _: Response): void {
  const currentTime = new Date();
  const dateTime = currentTime.toISOString();
  const ip = getIPAddress(request);
  const method = request.method;
  const path = request.url;
  const auth = request.user;

  console.log(`[${dateTime}] ${method} ${path} -- ${ip} ${auth}`);
}