export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxtDi: { containerPath: 'Application/container' },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-07',
})
