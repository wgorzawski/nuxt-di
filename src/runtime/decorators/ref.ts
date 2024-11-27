import { Vue } from 'vue-facing-decorator';

/**
 * `@Ref` decorator registers a reactive Vue reference.
 * @param key Optional key to identify the reference.
 */
export function Ref<T>(key?: string): Function {
  return function (target: T, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      // @ts-ignore
      get(this: Vue) {
        return this.$refs[key];
      },
    });
  };
}
