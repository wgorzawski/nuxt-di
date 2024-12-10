import { defineNuxtModule, createResolver, addImportsDir, addPlugin } from '@nuxt/kit';
import type { ModuleOptions } from '@nuxt/schema';
export * from './runtime/container';
export * from './runtime/eventSystem';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-di',
    configKey: 'nuxtDi',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    containerPath: '~/container',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Add runtime configuration for the container path
    nuxt.options.runtimeConfig.public.nuxtDi = {
      containerPath: options.containerPath,
    };

    // Add the plugin to initialize the Awilix container
    addPlugin(resolver.resolve('./runtime/plugin'));

    // Register composables directory for auto-import
    addImportsDir(resolver.resolve('./runtime/composables'));
  },
});
