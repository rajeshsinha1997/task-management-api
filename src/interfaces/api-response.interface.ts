/**
 * interface representing the structure of the API response.
 */
interface ApiResponse {
    /**
     * time-stamp of the API response.
     */
    'response-timestamp': string;

    /**
     * data of the API response.
     */
    'response-data': string | object;
}