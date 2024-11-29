interface Config {
  apiUrl: string
}

/**
 * Example service class that uses a dependency from the container.
 */
export default class MyService {
  private config: Config
  constructor({ config }: { config: Config }) {
    this.config = config
  }

  /**
   * Returns the API URL from the configuration.
   *
   * @returns {string} The API URL.
   */
  getApiUrl(): string {
    return this.config.apiUrl
  }
}
