<template>
  <p ref="paragraph">
    {{ url }}
  </p>
</template>

<script setup lang="ts">
const container = useContainer();

const myService = container.resolve('myService');
const url = myService.getApiUrl();
</script>
