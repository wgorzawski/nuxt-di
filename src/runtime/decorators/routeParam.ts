export function RouteParam<T>(key?: string): Function {
  return function (target: T, param: string) {
    Object.defineProperty(target, param, {
      // @ts-ignore
      get(this: Vue) {
        const currentParamName = key || param;
        const params = this.$route.params || {};
        return currentParamName === 'params' ? params : params[currentParamName] || '';
      },
    });
  }
}
