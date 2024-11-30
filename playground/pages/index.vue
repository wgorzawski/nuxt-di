<template>
  <p ref="paragraph">
    {{ url }}
    {{ user }}
    {{ userName }}
  </p>
</template>

<script setup lang="ts">
import type MyService from '~/services/myService';
import type UserService from '~/services/userService';


const container = useContainer();
const myService = container.resolve<MyService>('myService');

const userService = useContainer<UserService>('userService');

const url = myService.getApiUrl();
const user = myService.getUser();

const userName = userService.getUserName();
</script>
