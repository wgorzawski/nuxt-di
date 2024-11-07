import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { createContainer } from 'awilix'

// Module options TypeScript interface definition
export interface ModuleOptions {
  containerPath: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-di',
    configKey: 'nuxtDi',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    containerPath: 'container',
  },
  setup(_options, _nuxt) {
    // Utwórz kontener Awilix
    const container = createContainer();
    const resolver = createResolver(import.meta.url);
    const containerPath = resolver.resolve(_nuxt.options.rootDir, _options.containerPath);

    // Ładowanie i rejestracja zależności z container.ts
    try {
      const registerDependencies = require(containerPath).default;
      registerDependencies(container);
    } catch (error) {
      console.warn('No container.ts file found or an error occurred while loading dependencies.');
    }

    console.log('Provided container to Nuxt!');
  },
})
