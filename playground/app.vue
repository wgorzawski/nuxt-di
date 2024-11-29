<template>
  <h3>Nuxt module playground!</h3>
  <NuxtPage />
</template>

<script lang="ts">
@NuxtComponent({})
export default class App extends BaseComponent {
  @Meta()
  public getMeta() {
    return {
      title: 'Playground',
      titleTemplate: '%s | Nuxt DI',
      description: 'This is the home page of my awesome webapp.',
      meta: [
        { property: 'og:title', content: 'Home Page | My Awesome Webapp' },
        { property: 'og:type', content: 'website' },
      ],
    }
  }
}
</script>
