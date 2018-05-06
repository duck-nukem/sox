import { Request, Response } from '../http';
import { getIPAddress } from '../http/utils';

export function logRequest(
    request: Request,
    _response: Response,
): void {
  const currentTime = new Date();
  const dateTime = currentTime.toISOString();
  const ip = getIPAddress(request);
  const method = request.method;
  const path = request.url;
  const headers = request.headers;
  const auth = !!headers.authorization ?
      `${headers.authorization.split(' ')[0]} Authorization` :
      'Unauthenticated';

  console.log(`[${dateTime}] ${method} ${path} -- ${ip} ${auth}`);
}