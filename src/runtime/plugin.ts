import { diContainer, loadDependencies } from './container'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

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
  const config = useRuntimeConfig()
  const containerPath = config.public.nuxtDi.containerPath

  // Load user-defined dependencies from the specified container file
  await loadDependencies(containerPath)

  // Provide the container globally in the Nuxt app context
  nuxtApp.provide('container', diContainer)
})
