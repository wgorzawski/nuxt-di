<template>
  <p ref="paragraph">
    {{ url }}
    {{ user }}
    {{ userName }}
  </p>
</template>

<script setup lang="ts">
  import { $MyService } from '~/symbol';
  import type MyService from '~/services/myService';
  import type UserService from '~/services/userService';

  const userService = useContainer<UserService>('userService');
  const userName = userService.getUserName();

  const container = useContainer();
  const myService = container.resolve<MyService>($MyService);
  const url = myService.getApiUrl();
  const user = myService.getUser();
</script>
