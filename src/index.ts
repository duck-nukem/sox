import { Server, server } from './server';
import { SERVER_CONFIG } from './server/config';
import { Initialize } from './server/decorators/initializable';
import { Initializable } from './server/models/initializable.model';
import { APP_CONTROLLERS } from './server/shared';

@Initialize
class Main implements Initializable {
  init(): void {
    server.listen(SERVER_CONFIG.PORT, (serverError: Error) => {
      if (serverError) {
        return this.handleError(serverError);
      }

      this.setupControllers();
      Server.greet(SERVER_CONFIG);
    });
  }

  private setupControllers(): void {
    APP_CONTROLLERS.map(controller => new controller());
  }

  private handleError(serverError: Error): void {
    console.error(serverError);
  }
}

const APP = new Main();