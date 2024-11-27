<template>
  <div>Param: {{ id }}</div>
</template>

<script lang="ts">

@NuxtComponent({})
export default class PostPage extends BaseComponent {

  @RouteParam('id')
  public id!: string;
}
</script>
