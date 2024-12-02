import { $MyService } from '~/symbol';
import MyService from '~/services/myService';
import UserService from '~/services/userService';

/**
 * Function to register dependencies in the Awilix container.
 *
 * - This function is called by the module to allow the user to define custom dependencies.
 * - Dependencies are registered using the provided `registerDependency` function and resolver aliases.
 *
 * @param {object} context - The context provided to register dependencies.
 * @param {Function} context.registerDependency - Function to register a dependency in the Awilix container.
 * @param {Function} context.registerClass - Function to register a class as a dependency.
 * @param {object} context.resolvers - Aliases for Awilix resolver types (asClass, asFunction, asValue).
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ registerDependency, resolvers, registerClass }: any): void => {
  const { asClass, asValue, asFunction } = resolvers;

  registerClass($MyService, MyService);
  registerDependency('userService', asClass(UserService).singleton());
  registerDependency('config', asValue({ apiUrl: 'https://api.example.com' }));
  registerDependency(
    'logger',
    asFunction(() => ({
      log: (message: string) => console.log(`[LOG]: ${message}`),
    })).singleton(),
  );
};
