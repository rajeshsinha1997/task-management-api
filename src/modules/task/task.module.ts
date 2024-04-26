import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";

/**
 * module for managing task endpoints of the API and their operations.
 */
@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
