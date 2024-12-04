import { useContainer } from './useContainer';

/**
 * Composable to emit events through the event system.
 * @param eventName - The name of the event.
 * @param args - Arguments to pass to the event listeners.
 */
export function useEventEmitter(eventName: string, ...args: unknown[]): void {
  const container = useContainer();
  const eventSystem = container.resolve('eventSystem');

  eventSystem.emit(eventName, ...args);
}
