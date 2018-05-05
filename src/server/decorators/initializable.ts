import { InitializableClass } from '../models/initializable.model';

export function Initialize<T extends InitializableClass>(target: T) {
  return class extends target {
    //noinspection TsLint,JSUnusedGlobalSymbols
    constructor(...args: any[]) {
      super(...args);
      this.init();
    }
  };
}

