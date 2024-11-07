# Nuxt DI

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

> A Nuxt 3 module that adds Inversion of Control (IoC) and Dependency Injection (DI) support using the [Awilix](https://github.com/jeffijoe/awilix) library. It simplifies dependency management and helps structure code by automatically registering and resolving dependencies.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- **Automatic Dependency Registration**: Define all dependencies in a single `container.ts` file, making it easy to manage and modify your application’s dependency graph.
- **Flexible Registration Options**: Supports registering classes, functions, and values via Awilix’s `asClass`, `asFunction`, and `asValue` methods.
- **Global Access to Container**: Dependencies registered in the container can be accessed globally across your Nuxt application, reducing the need for manual imports.
- **Decorator-Based Injection**: Simplify dependency injection with the `@Inject` decorator, making code cleaner and easier to maintain.
- **Auto-loading Capabilities**: Optionally, enable automatic loading of dependencies from specified directories, which is ideal for larger applications.
- **Enhanced Modularity and Testability**: Encourages a decoupled code structure by separating dependency registration from usage, making it easy to swap or mock dependencies for testing.
## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-di
```

That's it! You can now use Nuxt DI in your Nuxt app ✨


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  pnpm install
  
  # Generate type stubs
  pnpm dev:prepare
  
  # Develop with the playground
  pnpm dev
  
  # Build the playground
  pnpm dev:build
  
  # Run ESLint
  pnpm lint
  
  # Run Vitest
  pnpm test
  pnpm test:watch
  
  # Release new version
  pnpm release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
