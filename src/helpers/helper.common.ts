import { ConfigService } from "@nestjs/config";

/**
 * helper class that provides common utility functions that are used in all modules.
 */
export class CommonHelper {
  /**
   * method to read value of an environment variable.
   *
   * @param environmentVariable - name or key associated with the environment variable value.
   * @param configService - instance of ConfigService class.
   * @param defaultValue - value to return if no associated value found for the given 
   *                       environment variable.
   *
   * @returns retrieved value of the environment variable given if exists, else
   * the default value will be returned.
   */
  public static readonly getEnvironmentVariableValue = (
    environmentVariable: string,
    configService: ConfigService,
    defaultValue: string | undefined = undefined
  ): string => configService.get<string>(environmentVariable, defaultValue);
}
