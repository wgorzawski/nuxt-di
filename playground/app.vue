<template>
  <div>
    Nuxt module playground!

    <p ref="p-ref">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">

@NuxtComponent({})
export default class App extends BaseComponent {

  @Ref('p-ref')
  public pRef!: HTMLParagraphElement;

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
    };
  }

  public message: string = 'hi from ssr!';

  public mounted() {
    this.message = 'hi!'
    console.log('pRef', this.pRef);
  }
}
</script>
