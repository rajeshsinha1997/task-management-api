import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * bootstrap the Nest.js application by creating an instance and
 * starting it.
 */
async function bootstrap() {
  // create a Nest.js application instance
  const app = await NestFactory.create(AppModule);

  // start the application and listen to the specific port
  await app.listen(3000);
}

// call the bootstrap function to start the application
bootstrap();
