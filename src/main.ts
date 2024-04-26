import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigurationConstant } from "./constants/constant.configuration";
import { CommonHelper } from "./helpers/helper.common";

/**
 * bootstrap the application by creating an instance and starting it.
 */
async function bootstrap() {
  // create a Nest.js application instance
  const app = await NestFactory.create(AppModule);

  // get server port value from environment variables
  const PORT = CommonHelper.getEnvironmentVariableValue(
    "PORT",
    app.get(ConfigService),
    ConfigurationConstant.DEFAULT_APPLICATION_SERVER_PORT
  );

  // start the application and listen to the specific port
  await app.listen(PORT);
}

// call the bootstrap function to start the application
bootstrap();
