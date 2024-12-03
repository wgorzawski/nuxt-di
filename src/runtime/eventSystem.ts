type EventCallback = (...args: unknown[]) => void;

export class EventSystem {
  private events: Map<string, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  /**
   * Register an event listener for a given event.
   * @param eventName - The name of the event.
   * @param callback - The callback to invoke when the event is emitted.
   */
  on(eventName: string, callback: EventCallback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName)?.push(callback);
  }

  /**
   * Unregister an event listener for a given event.
   * @param eventName - The name of the event.
   * @param callback - The callback to remove.
   */
  off(eventName: string, callback: EventCallback) {
    const listeners = this.events.get(eventName);
    if (!listeners) return;
    this.events.set(
      eventName,
      listeners.filter((listener) => listener !== callback)
    );
  }

  /**
   * Emit an event with optional arguments.
   * @param eventName - The name of the event.
   * @param args - Arguments to pass to the event listeners.
   */
  emit(eventName: string, ...args: unknown[]) {
    const listeners = this.events.get(eventName);
    if (!listeners) return;
    listeners.forEach((listener) => listener(...args));
  }

  /**
   * Clear all listeners for a given event or all events.
   * @param eventName - The name of the event to clear. If not provided, clears all events.
   */
  clear(eventName?: string) {
    if (eventName) {
      this.events.delete(eventName);
    } else {
      this.events.clear();
    }
  }
}
