"use client";

import { useMemo, useState, useCallback } from "react";

export type UseCounterReturn = {
  value: number;
  increment(step?: number): void;
  decrement(step?: number): void;
  reset(): void;
  set(newValue: number): void;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

export function useCounter(initialValue: number = 0): UseCounterReturn {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback((step: number = 1) => {
    setValue((prev) => prev + step);
  }, []);

  const decrement = useCallback((step: number = 1) => {
    setValue((prev) => prev - step);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  const set = useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      value,
      increment,
      decrement,
      reset,
      set,
      setValue,
    }),
    [value, increment, decrement, reset, set, setValue]
  );

  return memoizedValue;
}

export default useCounter;
