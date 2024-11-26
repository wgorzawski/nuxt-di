<template>
  <div>
    Nuxt module playground! {{ message }}
  </div>
</template>

<script lang="ts">
@Component({})
export default class App extends Vue {
  public message: string = 'hi from ssr';

  @Log()
  public mounted() {
    this.message = 'hi!'
  }
}
</script>
