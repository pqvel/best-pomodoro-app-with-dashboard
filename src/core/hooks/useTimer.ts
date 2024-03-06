import { useState } from "react";

type useTimerParams = {
  initialTimerTime: number;
};

type useTimerReturn = {
  leftTime: number;
  changeTimerTime: (timerTime: number) => void;
  playTimer: () => void;
  pauseTimer: () => void;
  stopTimer: () => void;
};

/**
 * в useTimer можно вернуть хук который будет устанавливать timerTime
 * pastTIme через useState, initialTimerTime передавать через аргумены,
 * можно сделать reducer
 */

export const useTimer = ({
  initialTimerTime,
}: useTimerParams): useTimerReturn => {
  const [pastTime, setPastTime] = useState<number>(0);
  const [timerTime, setTimerTime] = useState<number>(initialTimerTime);
  const [leftTime, setLeftTime] = useState<number>(initialTimerTime);
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | null>(
    null
  );

  let currTime: number = 0;
  let prevTime: number = 0;
  let pTime: number = 0;

  const playTimer = (): void => {
    prevTime = Date.now();
    console.log(`pastTime ${pastTime}`);
    pTime = pastTime;
    setTimerId(
      setInterval(() => {
        currTime = Date.now();
        pTime += currTime - prevTime;
        setPastTime(pTime);
        const newLeftTime = Math.ceil((timerTime - pTime) / 1000) * 1000;
        newLeftTime < 0 ? setLeftTime(0) : setLeftTime(newLeftTime);

        prevTime = Date.now();
      }, 500)
    );
  };

  const pauseTimer = (): void => {
    if (!timerId) return;
    clearInterval(timerId);
    setTimerId(null);
  };

  const stopTimer = (): void => {
    if (timerId) {
      setPastTime(0);
      clearInterval(timerId);
      setTimerId(null);
      setLeftTime(0);
    }

    setPastTime(0);
  };

  const changeTimerTime = (timerTime: number): void => {
    setTimerTime(timerTime);
    setLeftTime(timerTime);
  };

  return {
    leftTime,
    changeTimerTime,
    playTimer,
    pauseTimer,
    stopTimer,
  };
};
