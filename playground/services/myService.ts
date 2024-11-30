import type UserService from './userService';

interface Config {
  apiUrl: string
}

/**
 * Example service class that uses a dependency from the container.
 */
export default class MyService {
  private config: Config;
  private readonly userService: UserService;

  constructor({ config, userService }: { config: Config, userService: UserService }) {
    this.config = config;
    this.userService = userService;
  }

  /**
   * Returns the API URL from the configuration.
   *
   * @returns {string} The API URL.
   */
  getApiUrl(): string {
    return this.config.apiUrl;
  }

  getUser(): string {
    return `${this.userService.getUserName()} ${this.userService.getUserSurname()}`;
  }
}
