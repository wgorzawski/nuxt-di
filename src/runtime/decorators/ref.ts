/**
 * `@Ref` decorator registers a reactive Vue reference.
 * @param key Optional key to identify the reference.
 */
export function Ref<T>(key?: string) {
  return function (target: T, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
      get(this) {
        return this.$refs[key]
      },
    })
  }
}
