# Nuxt DI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> A Nuxt 3 module that adds Inversion of Control (IoC) and Dependency Injection (DI) support using the [Awilix](https://github.com/jeffijoe/awilix) library. It simplifies dependency management and helps structure code.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- **Automatic Dependency Loading:** Configure and load services dynamically.
- **Class Registration:** Register services as classes, supporting constructor-based DI.
- **Composables Integration:** Inject services directly into your components or composables.
- **Lightweight Decorators:** Simplify dependency injection in classes.
- **Nuxt Native Support:** Fully compatible with Nuxt's auto-import and plugin ecosystem.

## Installation

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-di
```
and add it to your `nuxt.config.ts` file:
```typescript
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['nuxt-di'],
  nuxtDi: {
    containerPath: '~/container' // Optionally add path to your container configuration
  }
});
```
Create the `~/container.ts` file:

```typescript
import { $MyService } from '~/symbol';
import MyService from '~/services/myService';

export default ({ registerClass }: any): void => {
  registerClass($MyService, MyService);
};
```
That's it! You can now use Nuxt DI in your Nuxt app ✨

## Usage
```html
<template>
  <p ref="paragraph">
    {{ url }}
    {{ user }}
    {{ userName }}
  </p>
</template>

<script setup lang="ts">
  import { $MyService } from '~/symbol';
  import MyService from '~/services/myService';
  import UserService from '~/services/userService';

  const userService = useContainer<UserService>('userService');
  const userName = userService.userName;

  const container = useContainer();
  const myService = container.resolve($MyService);
  const url = myService.apiUrl;
  const user = myService.user;
</script>
```
## License
[MIT](http://opensource.org/licenses/MIT)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
