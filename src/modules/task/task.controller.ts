import { Controller } from "@nestjs/common";
import { TaskService } from "./task.service";

/**
 * controller for managing task related endpoints.
 */
@Controller("/api/task")
export class TaskController {
  /**
   * constructor to initialize an instance of TaskController.
   *
   * @param taskService - instance of TaskService.
   */
  constructor(private taskService: TaskService) {}
}
