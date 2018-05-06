import { IRoute, RequestHandler } from 'express';
import { serverInstance } from '../index';

export const REQUEST_METHOD = {
  DELETE: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).delete(action),

  GET: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).get(action),

  HEAD: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).head(action),

  OPTIONS: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).options(action),

  PATCH: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).patch(action),

  POST: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).post(action),

  PUT: (path: string, action: RequestHandler): IRoute =>
      serverInstance.route(path).put(action),
};

export type RequestMethod = (path: string, action: RequestHandler) => IRoute;