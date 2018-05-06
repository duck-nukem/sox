import { Request } from './index';

export function getIPAddress(request: Request): string | string[] {
  return request.headers['x-forwarded-for'] || request.connection.remoteAddress;
}
