import { defineNuxtModule, createResolver, addImportsDir, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-di',
    configKey: 'nuxtDi',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addImportsDir(resolver.resolve('./runtime/decorators'));

    const nuxt_property_decorator = addTemplate({
      src: resolver.resolve("../templates/nuxt-property-decorator.ts"),
      dst: nuxt.options.buildDir + "/nuxt-property-decorator.ts",
      write: true,
    })

    nuxt.options.alias["nuxt-property-decorator"] = nuxt_property_decorator.dst

    nuxt.hook('vite:extendConfig', config => {
      if (config.esbuild) {
        config.esbuild.tsconfigRaw ??= {}
        if (typeof config.esbuild.tsconfigRaw === "string") {
          config.esbuild.tsconfigRaw = JSON.parse(config.esbuild.tsconfigRaw)
        }
        if (typeof config.esbuild.tsconfigRaw === "object" && config.esbuild.tsconfigRaw) {
          config.esbuild.tsconfigRaw.compilerOptions ??= {}
          config.esbuild.tsconfigRaw.compilerOptions.experimentalDecorators = true
        }
      }
    })
  },
})
