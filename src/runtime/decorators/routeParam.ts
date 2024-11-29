export function RouteParam<T>(key?: string) {
  return function (target: T, param: string): void {
    Object.defineProperty(target, param, {
      get(this) {
        const currentParamName = key || param
        const params = this.$route.params || {}
        return currentParamName === 'params' ? params : params[currentParamName] || ''
      },
    })
  }
}
