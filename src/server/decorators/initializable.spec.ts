import { Initialize } from './initializable';

describe('initializable', () => {
  const INIT_MESSAGE = 'Hello world!';

  it('should call init()', () => {
    const instance = new InitializableClass(INIT_MESSAGE);

    expect(instance.isInitialized).toBeTruthy();
  });

  it('should preserve args passed to constructor', () => {
    const instance = new InitializableClass(INIT_MESSAGE);

    expect(instance.message).toEqual(INIT_MESSAGE);
  });
});

@Initialize
class InitializableClass {
  isInitialized = false;
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  init(): void {
    this.isInitialized = true;
  }
}


