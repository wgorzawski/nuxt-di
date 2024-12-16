import { useNuxtApp } from '#app';
import type {Container} from 'nuxt-di';

/**
 * Provides access to the Awilix dependency injection container.
 *
 * @template T - The type of the Awilix container.
 * @throws {Error} If the container is not available in the Nuxt app context.
 * @returns {T} The Awilix dependency injection container instance or resolved dependency.
 */
export function useContainer<T = Container>(dependencyName?: string): T {
  const nuxtApp = useNuxtApp();
  const container = nuxtApp.$container;

  if (!container) {
    throw new Error('[NuxtDi] Dependency Injection container is not available.');
  }

  if(!dependencyName) {
    return container as T;
  }

  const resolvedDependency = container.resolve<T>(dependencyName);

  if (!resolvedDependency) {
    throw new Error(`[NuxtDi] Dependency "${dependencyName}" not found in the DI container.`);
  }

  return resolvedDependency as T;

}
