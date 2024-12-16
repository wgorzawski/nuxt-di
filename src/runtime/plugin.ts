import { defineNuxtPlugin } from '#app';

/**
 * Nuxt plugin to initialize and provide the Awilix dependency injection container.
 *
 * - Loads user-defined dependencies from the configured container path.
 * - Provides the container globally as `$container` in the Nuxt app context.
 *
 * @param {object} nuxtApp - The Nuxt app instance.
 * @returns {void}
 */
export default defineNuxtPlugin(async (nuxtApp) => {
  // const containerPath = nuxtApp.$config.public.nuxtDi.containerPath;

  const { default: containerModule } = await import('../../playground/container');

  // console.log('plugin config', containerPath);

  // console.log('plugin container', container);
  //
  // // Load user-defined dependencies from the specified container file
  // // await loadDependencies(containerPath);
  //
  // // Provide the container globally in the Nuxt app context
  nuxtApp.provide('containerTest', containerModule);
});
