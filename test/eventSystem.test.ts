import { describe, it, expect, vi } from 'vitest';
import { EventSystem } from 'nuxt-di';

describe('EventSystem', () => {
  it('should register and emit an event', () => {
    const eventSystem = new EventSystem();
    const callback = vi.fn();

    eventSystem.on('testEvent', callback);
    eventSystem.emit('testEvent', 'payload1', 'payload2');

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('payload1', 'payload2');
  });

  it('should handle multiple listeners for the same event', () => {
    const eventSystem = new EventSystem();
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    eventSystem.on('testEvent', callback1);
    eventSystem.on('testEvent', callback2);
    eventSystem.emit('testEvent', 'payload');

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback1).toHaveBeenCalledWith('payload');
    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledWith('payload');
  });

  it('should remove a listener with off', () => {
    const eventSystem = new EventSystem();
    const callback = vi.fn();

    eventSystem.on('testEvent', callback);
    eventSystem.off('testEvent', callback);
    eventSystem.emit('testEvent', 'payload');

    expect(callback).not.toHaveBeenCalled();
  });

  it('should clear all listeners for a specific event', () => {
    const eventSystem = new EventSystem();
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    eventSystem.on('testEvent', callback1);
    eventSystem.on('testEvent', callback2);
    eventSystem.clear('testEvent');
    eventSystem.emit('testEvent', 'payload');

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).not.toHaveBeenCalled();
  });

  it('should clear all listeners for all events', () => {
    const eventSystem = new EventSystem();
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    eventSystem.on('event1', callback1);
    eventSystem.on('event2', callback2);
    eventSystem.clear();
    eventSystem.emit('event1', 'payload1');
    eventSystem.emit('event2', 'payload2');

    expect(callback1).not.toHaveBeenCalled();
    expect(callback2).not.toHaveBeenCalled();
  });

  it('should handle emitting an event with no listeners', () => {
    const eventSystem = new EventSystem();

    expect(() => {
      eventSystem.emit('nonExistentEvent', 'payload');
    }).not.toThrow();
  });

  it('should handle removing a listener that does not exist', () => {
    const eventSystem = new EventSystem();
    const callback = vi.fn();

    expect(() => {
      eventSystem.off('nonExistentEvent', callback);
    }).not.toThrow();
  });
});
