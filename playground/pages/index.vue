<template>
  <div class="home-page">
    <p>{{ url }}</p>
    <p>{{ user }}</p>
    <p>{{ userName }}</p>
  </div>
</template>

<script setup lang="ts">
  import { $MyService } from '~/symbol';
  import type UserService from '~/services/userService';

  const userService = useContainer<UserService>('userService');
  const userName = userService.userName;

  const container = useContainer();
  const myService = container.resolve($MyService);
  const url = myService.apiUrl;
  const user = myService.user;
</script>
