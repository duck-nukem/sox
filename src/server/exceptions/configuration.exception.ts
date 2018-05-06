import { Exception } from './exception';

export class ConfigurationException extends Exception {
  constructor(message: string) {
    super(message);
  }
}