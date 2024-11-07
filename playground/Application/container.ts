// plugins/container.ts
import { asClass, asFunction, asValue, type AwilixContainer } from 'awilix';

export default (container: AwilixContainer) => {
  container.register({
    constantValue: asValue({ value: 42 })
  });
};
