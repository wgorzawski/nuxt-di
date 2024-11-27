<template>
  <p ref="paragraph">{{ message }}</p>
</template>

<script lang="ts">
@NuxtComponent({})
export default class IndexPage extends BaseComponent {

  @Ref('paragraph')
  public paragraph!: HTMLParagraphElement;

  public message: string = 'hi from ssr!';

  public mounted() {
    this.message = 'hi!'
    console.log('paragraph', this.paragraph);
  }
}
</script>
