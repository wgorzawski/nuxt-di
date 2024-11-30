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
 * @param {object} context.resolvers - Aliases for Awilix resolver types (asClass, asFunction, asValue).
 * @returns {void}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default ({ registerDependency, resolvers }: any): void => {
  const { asClass, asValue, asFunction } = resolvers;

  registerDependency('myService', asClass(MyService).singleton());
  registerDependency('userService', asClass(UserService).singleton());
  registerDependency('config', asValue({ apiUrl: 'https://api.example.com' }));
  registerDependency(
    'logger',
    asFunction(() => ({
      log: (message: string) => console.log(`[LOG]: ${message}`),
    })).singleton(),
  );
};
