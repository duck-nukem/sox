import { GreetingController } from './greeting/greeting.controller';

export const REGISTERED_ROUTES = new Set();
export const ENTITY_ROOT_PATHS = new Map<string, string>();

export const APP_CONTROLLERS = [
  GreetingController,
];
