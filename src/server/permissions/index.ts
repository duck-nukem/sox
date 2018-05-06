import { Request } from '../http';

export function isAuthenticated(request: Request): boolean {
  const authorizationHeader = request.headers.authorization;
  return !!authorizationHeader;
}