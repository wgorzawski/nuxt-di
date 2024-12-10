import { describe, it, expect } from 'vitest';
import { diContainer, registerClass } from 'nuxt-di';
import UserService from '../playground/services/userService';

describe('container.ts', () => {
  it('should register and resolve a class dependency', () => {
    // Register UserService as a class dependency
    registerClass('userService', UserService);

    // Resolve the dependency from the container
    const userService = diContainer.resolve<UserService>('userService');

    expect(userService).toBeInstanceOf(UserService);
  });

  it('should resolve services and retain singleton instance', () => {
    // Register UserService as a singleton class
    registerClass('userService', UserService);

    // Resolve the service twice from the container
    const userService1 = diContainer.resolve<UserService>('userService');
    const userService2 = diContainer.resolve<UserService>('userService');

    // Ensure both references point to the same instance
    expect(userService1).toBe(userService2);
  });
});
