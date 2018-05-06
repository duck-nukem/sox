import { logRequest } from './request-logger.middleware';

export const MIDDLEWARES = [
  logRequest,
];