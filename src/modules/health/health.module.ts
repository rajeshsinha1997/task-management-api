import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";

/**
 * module for handling the health check endpoints of the API and their operations.
 */
@Module({
  controllers: [HealthController],
  providers: [],
})
export class HealthModule {}
