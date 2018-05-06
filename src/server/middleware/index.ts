import { Request, Response } from '../http';
import { basicAuthenticationMiddleware } from './basic-authentication';
import { requestLoggerMiddleware } from './request-logger';

export const MIDDLEWARES = [
  basicAuthenticationMiddleware,
  requestLoggerMiddleware,
];

export type Middleware = (request: Request, _: Response) => void;