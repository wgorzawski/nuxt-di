import { useHead } from 'unhead'

/**
 * `@Meta` decorator that uses a method to provide meta information.
 * Updates meta tags for both SSR and client-side rendering.
 */
export function Meta<T>() {
  return function (target: T, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value


    descriptor.value = function (...args: Record<string, string>[]) {
      return originalMethod.apply(this, args)
    }

    useHead(descriptor.value())
  }
}
