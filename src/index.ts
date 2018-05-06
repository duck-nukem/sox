import { Server, serverInstance } from './server';
import { SERVER_CONFIG } from './server/config';
import { Initialize } from './server/decorators/initializable';
import { Initializable } from './server/models/initializable.model';
import { APP_CONTROLLERS } from './server/shared';

@Initialize
class Main implements Initializable {
  init(): void {
    Server.greet(SERVER_CONFIG);

    serverInstance.listen(
        SERVER_CONFIG.PORT,
        (serverError: Error) => this.runServer(serverError),
    );
  }

  private runServer(serverError: Error): void {
    if (serverError) {
      return this.handleError(serverError);
    }

    this.setupControllers();
  }

  private setupControllers(): void {
    APP_CONTROLLERS.map(controller => new controller());
  }

  private handleError(serverError: Error): void {
    console.error(serverError);
  }
}

bootstrap(new Main());

function bootstrap(app: Main): Main {
  return app;
}