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

  public message: string = 'hi from ssr!';

  @Log()
  public mounted() {
    this.message = 'hi!'
    console.log('pRef', this.pRef);
  }
}
</script>
