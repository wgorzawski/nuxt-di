import {useHead} from 'unhead';

/**
 * `@Meta` decorator that uses a method to provide meta information.
 * Updates meta tags for both SSR and client-side rendering.
 */
export function Meta(): Function {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      return originalMethod.apply(this, args);
    }

    useHead(descriptor.value());
  }
}
