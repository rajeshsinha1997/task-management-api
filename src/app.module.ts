import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HealthModule } from "./modules/health/health.module";
import { TaskModule } from "./modules/task/task.module";

/**
 * root module for the application.
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    HealthModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
