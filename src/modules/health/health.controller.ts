import { Controller, Get } from "@nestjs/common";

/**
 * controller for handling health check endpoints.
 */
@Controller("/api/health")
export class HealthController {
  /**
   * Handler for the endpoint: GET /api/health.
   *
   * @returns an ApiResponse object describing the health
   * information of the API.
   */
  @Get("/")
  public getHealth(): IResponse {
    // return health information response
    return { "response-timestamp": "", "response-data": "OK" };
  }
}
