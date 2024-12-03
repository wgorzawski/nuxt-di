<template>
  <div class="home-page">
    <p>{{ apiUrl }}</p>
    <p>{{ user }}</p>
    <p>{{ userName }}</p>
    <br>
    <p>{{ message }}</p>
    <button @click="sendEvent">Send Event</button>
  </div>
</template>

<script setup lang="ts">
  import { $MyService } from '~/symbol';
  import type UserService from '~/services/userService';

  const userService = useContainer<UserService>('userService');
  const userName = userService.userName;

  const container = useContainer();
  const myService = container.resolve($MyService);
  const { user, apiUrl } = myService;

  const message = ref('No events received.');

  // Listen for "customEvent"
  useEventListener('customEvent', (payload: string) => {
    message.value = `Received: ${payload}`;
  });

  // Emit a "customEvent"
  function sendEvent() {
    console.log('sendEvent');
    useEventEmitter('customEvent', 'Hello from Event');
  }
</script>
