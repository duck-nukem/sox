import {
  NextFunction as ExpressNext,
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';
import * as HttpStatus from 'http-status-codes';

export type Response = ExpressResponse;
export type Next = ExpressNext;
export const HTTP_STATUS = HttpStatus;

export interface Request<T = any> extends ExpressRequest {
  params: T;
  user?: string;
}
