import { useState } from "react";

type useTimerParams = {
  timerTime: number;
};

type useTimerReturn = {
  leftTime: number;
  playTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
};

export const useTimer = ({ timerTime }: useTimerParams): useTimerReturn => {
  const [leftTime, setLeftTime] = useState<number>(timerTime);
  let timerId: ReturnType<typeof setInterval>;
  let currTime: number = 0;
  let prevTime: number = 0;
  let pastTime: number = 0;

  const playTimer = () => {
    prevTime = Date.now();

    timerId = setInterval(() => {
      currTime = Date.now();
      pastTime += currTime - prevTime;

      setLeftTime(() => timerTime - pastTime);

      prevTime = Date.now();
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timerId);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    pastTime = 0;
    setLeftTime(0);
  };

  return {
    leftTime,
    playTimer,
    pauseTimer,
    stopTimer,
  };
};
