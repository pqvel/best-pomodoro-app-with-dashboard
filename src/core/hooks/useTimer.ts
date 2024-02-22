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

/**
 * в useTimer можно вернуть хук который будет устанавливать timerTime
 */

export const useTimer = ({ timerTime }: useTimerParams): useTimerReturn => {
  const [leftTime, setLeftTime] = useState<number>(timerTime);
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | null>(
    null
  );
  let currTime: number = 0;
  let prevTime: number = 0;
  let pastTime: number = 0;

  const playTimer = () => {
    prevTime = Date.now();
    setTimerId(
      setInterval(() => {
        currTime = Date.now();
        pastTime += currTime - prevTime;

        const newLeftTime = Math.ceil((timerTime - pastTime) / 1000) * 1000;
        newLeftTime < 0 ? setLeftTime(0) : setLeftTime(newLeftTime);

        prevTime = Date.now();
      }, 500)
    );
  };

  const pauseTimer = () => {
    if (!timerId) return;
    clearInterval(timerId);
    setTimerId(null);
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }

    pastTime = 0;
    setLeftTime(timerTime);
  };

  return {
    leftTime,
    playTimer,
    pauseTimer,
    stopTimer,
  };
};
