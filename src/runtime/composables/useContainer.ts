import type { AwilixContainer } from 'awilix';
import { useNuxtApp } from '#app';

/**
 * Provides access to the Awilix dependency injection container.
 *
 * @template T - The type of the Awilix container.
 * @throws {Error} If the container is not available in the Nuxt app context.
 * @returns {T} The Awilix dependency injection container instance.
 */
export function useContainer<T = AwilixContainer>(dependencyName?: string): T {
  const nuxtApp = useNuxtApp();
  const container = nuxtApp.$container as T;

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
