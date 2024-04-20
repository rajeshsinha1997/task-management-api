import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';

/**
 * root application module for the Nest.js application.
 */
@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
