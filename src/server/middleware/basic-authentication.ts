import * as atob from 'atob';
import { SERVER_CONFIG } from '../config';
import { Request } from '../http';

export function basicAuthenticationMiddleware(
    request: Request,
    _: Response,
): void {
  setRequestUser('Anonymous');
  const authHeader = request.headers.authorization;

  if (authHeader) {
    const encoded = authHeader.split(`${SERVER_CONFIG.AUTH_HEADER_PREFIX} `)[1];

    const credentials = atob(encoded);
    const user = credentials.split(':')[0];
    setRequestUser(user);
  }

  function setRequestUser(user: string): void {
    request.user = user;
  }
}