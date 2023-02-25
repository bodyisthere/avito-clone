import { useRef, useCallback } from "react";

export const useDeb = (callback: any, delay: number) => {
  const timer = useRef<any>();

  const debouncedCallback = useCallback((...args: any) => {
    if(timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => callback(...args), delay)
  }, [callback, delay])

  return debouncedCallback();
}