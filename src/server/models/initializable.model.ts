export type InitializableClass = {
  //noinspection TsLint
  new(...args: any[]): Initializable
};

export interface Initializable {
  init(): void;
}