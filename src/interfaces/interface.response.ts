/**
 * interface representing the structure of the API response.
 */
interface IResponse {
  /**
   * time-stamp of the API response.
   */
  "response-timestamp": string;

  /**
   * data of the API response.
   */
  "response-data": string | object;
}
