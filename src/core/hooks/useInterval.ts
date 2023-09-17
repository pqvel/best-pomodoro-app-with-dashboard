import { useState } from "react";

type UseIntervalReturnType = {
  startInterval: (callback: TimerHandler, timeout: number) => void;
  stopInterval: () => void;
};

export const useInterval = (): UseIntervalReturnType => {
  let timerId: ReturnType<typeof setInterval>;

  const startInterval = (callback: TimerHandler, timeout: number): void => {
    timerId = setInterval(callback, timeout);
  };

  const stopInterval = (): void => {
    clearInterval(timerId);
  };

  return {
    startInterval,
    stopInterval,
  };
};
