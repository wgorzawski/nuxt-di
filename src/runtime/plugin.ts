import { defineNuxtPlugin } from '#app'
import { createContainer } from 'awilix';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by nuxt-di!');
});
