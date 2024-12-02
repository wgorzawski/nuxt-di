<template>
  <p ref="paragraph">
    {{ url }}
    {{ user }}
    {{ userName }}
  </p>
</template>

<script setup lang="ts">
  import { $MyService } from '~/symbol';
  import UserService from '~/services/userService';

  const userService = useContainer<UserService>('userService');
  const userName = userService.userName;

  const container = useContainer();
  const myService = container.resolve($MyService);
  const url = myService.apiUrl;
  const user = myService.user;
</script>
