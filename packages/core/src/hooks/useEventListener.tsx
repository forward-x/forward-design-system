import { useEffect, useRef } from 'react';

/**
 * @param eventType Type of event
 * @param callback Callback function to call when the event is triggered
 * @param element DOM element to add listener to (default: window)
 */
const useEventListener = (
  eventType: keyof WindowEventMap,
  callback: (e?: any) => any,
  element = window
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export default useEventListener;
