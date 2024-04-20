import { Controller, Get } from "@nestjs/common";

/**
 * controller class for handling the health check endpoints.
 */
@Controller('/api')
export class HealthController { 
    /**
     * Handler for the endpoint: GET /api/health.
     * 
     * @returns an ApiResponse object describing the health
     * information of the API.
     */
    @Get('/health')
    public getHealth(): ApiResponse { 
        // return health information response
        return {'response-timestamp': '', 'response-data': 'OK'}
    }
}