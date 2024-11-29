import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-di',
    configKey: 'nuxtDi',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('./runtime'))

    nuxt.hook('vite:extendConfig', (config) => {
      if (config.esbuild) {
        config.esbuild.tsconfigRaw ??= {}
        if (typeof config.esbuild.tsconfigRaw === 'string') {
          config.esbuild.tsconfigRaw = JSON.parse(config.esbuild.tsconfigRaw)
        }
        if (typeof config.esbuild.tsconfigRaw === 'object' && config.esbuild.tsconfigRaw) {
          config.esbuild.tsconfigRaw.compilerOptions ??= {}
          config.esbuild.tsconfigRaw.compilerOptions.experimentalDecorators = true
        }
      }
    })
  },
})
