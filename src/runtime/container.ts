import { createContainer, type AwilixContainer, asClass, asValue, type Resolver } from 'awilix/browser';
import { EventSystem } from 'nuxt-di';

export class Container {
  private readonly fContainer: AwilixContainer;

  constructor() {
    this.fContainer = createContainer();
    this.fContainer.register('eventSystem', asValue(new EventSystem()));
  }

  public registerDependency<T>(name: string | symbol, resolver: Resolver<T>): void {
    this.fContainer.register(name, resolver);
  }


  public register<T>(name: string | symbol, resolver: Resolver<T>): void {
    this.fContainer.register(name, resolver);
  }


  public registerClass<T>(name: string | symbol, dependencyClass: new (...args: unknown[]) => T): void {
    this.fContainer.register(name, asClass(dependencyClass).singleton());
  }


  public resolve<T>(name: string): T {
    return this.fContainer.resolve<T>(name);
  }
}
