import { createContainer, type AwilixContainer, asClass, asFunction, asValue, type Resolver } from 'awilix';

export const diContainer: AwilixContainer = createContainer();

/**
 * Registers a dependency in the Awilix container.
 *
 * @template T - The type of the registered dependency.
 * @param {string} name - The name of the dependency to register.
 * @param {Resolver<T>} resolver - The resolver configuration for the dependency.
 * @returns {void}
 */
export function registerDependency<T>(
  name: string,
  resolver: Resolver<T>,
): void {
  diContainer.register(name, resolver);
}

/**
 * Registers a dependency in the Awilix container as a class.
 *
 * @param {string} name - The name of the dependency to register.
 * @param {any} dependencyClass - The class to register as a dependency.
 * @returns {void}
 */
export function registerClass<T>(name: string | symbol, dependencyClass: new (...args: unknown[]) => T): void {
  diContainer.register(name, asClass(dependencyClass).singleton());
}

/**
 * Provides convenient aliases for Awilix resolver types.
 */
export const resolvers = {
  asClass,
  asFunction,
  asValue,
};

/**
 * Loads dependencies into the Awilix container from a user-defined container file.
 *
 * @param {string} containerPath - The path to the user-defined container file.
 * @returns {Promise<void>} Resolves when the dependencies are successfully loaded.
 * @throws {Error} If the container file does not export a default function or fails to load.
 */
export async function loadDependencies(containerPath: string): Promise<void> {
  try {
    // @TODO: Add containerPath dynamic import
    const { default: register } = await import('../../playground/container');

    if (typeof register === 'function') {
      register({
        registerDependency,
        registerClass,
        resolvers,
      });
    }
    else {
      console.warn(`[NuxtDi] The container file at ${containerPath} does not export a default function.`);
    }
  }
  catch (error) {
    console.error(`[NuxtDi] Failed to load dependencies from ${containerPath}`, error);
  }
}
