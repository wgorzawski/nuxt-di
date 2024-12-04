/* eslint-disable @typescript-eslint/no-explicit-any */
import { onUnmounted } from 'vue';
import { useContainer } from './useContainer';

/**
 * Composable to listen for events through the event system.
 * @param eventName - The name of the event.
 * @param callback - The callback to invoke when the event is emitted.
 */
export function useEventListener(eventName: string, callback: (...args: any[]) => void) {
  const container = useContainer();
  const eventSystem = container.resolve('eventSystem');

  eventSystem.on(eventName, callback);

  // Clean up listener on component unmount
  onUnmounted(() => {
    eventSystem.off(eventName, callback);
  });
}
